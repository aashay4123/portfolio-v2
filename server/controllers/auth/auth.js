const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const config = require("../../config");
const { sendEmail } = require("../../services/sendMail");

exports.signup = (req, res) => {
  const { name, email, password } = req.body;

  User.findOne({ email }).exec((err, user) => {
    if (err || user) {
      return res.status(400).json({
        error: "Email is taken",
      });
    }
    const token = jwt.sign(
      { name, email, password },
      config.JWT_ACCOUNT_ACTIVATION,
      { expiresIn: "10m" }
    );

    const emailData = {
      from: config.EMAIL_USERID,
      to: email,
      subject: `Account activation link`,
      text: `
                <h1>Please use the following link to activate your account</h1>
                <p>${config.NAMESPACE}/auth/activate/${token}</p>
                <hr />
                <p>This email may contain sensetive information</p>
                <p>${config.NAMESPACE}</p>
            `,
    };
    sendEmail(emailData);
  });
};

exports.accountActivation = (req, res) => {
  const { Token } = req.body;

  if (Token) {
    jwt.verify(Token, config.JWT_ACCOUNT_ACTIVATION, function (err, decoded) {
      if (err) {
        console.log("JWT VERIFY IN ACCOUNT ACTIVATION ERROR", err);
        return res.status(401).json({
          error: `Expired link. Signup again`,
        });
      }
      console.log("decoded", decoded);
      const { name, email, password } = jwt.decode(Token);

      const user = new User({ name, email, password });
      user.save((err, user) => {
        if (err) {
          console.log("SAVE USER IN ACCOUNT ACTIVATION ERROR", err);
          return res.status(401).json({
            error: "Error saving user in database. Try signup again",
          });
        }
        return res.json({
          message: "Signup success. Please signin.",
        });
      });
    });
  } else {
    return res.json({
      message: "Something went wrong. Try again.",
    });
  }
};

exports.signin = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User with that email does not exist. Please signup",
      });
    }
    if (!user.authenticate(password)) {
      return res.status(400).json({
        error: "Email and password do not match",
      });
    }
    const { _id, name, email, role } = user;

    const token = jwt.sign({ _id, name, email, role }, config.JWT_SECRET, {
      expiresIn: "2h",
    });

    return res.json({
      token,
      user: { _id, name, email, role },
    });
  });
};

exports.forgotPassword = (req, res, next) => {
  const { email } = req.body;
  User.findOne({ email }).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User with that email does not exist.",
      });
    }
    const token = jwt.sign(
      { _id: user._id, name: user.name },
      config.JWT_RESET_PASSWORD,
      {
        expiresIn: "10m",
      }
    );

    const emailData = {
      from: config.EMAIL_FROM,
      to: email,
      subject: `Password reset link`,
      text: `
                <h1>Please use the following link to Reset your Password</h1>
                <p>${config.NAMESPACE}/auth/reset/${token}</p>
                <hr />
                <p>This email may contain sensetive information</p>
                <p>${config.NAMESPACE}</p>
            `,
    };
    return user.updateOne({ resetPasswordLink: token }, (err, success) => {
      if (err) {
        console.log("RESET PASSWORD LINK ERROR", err);
        return res.status(400).json({
          error: "datase Connection reset password error ",
        });
      } else {
        mailgun.messages().send(emailData, function (error, body) {
          if (error) {
            console.log("SIGNUP EMAIL SENT ERROR", error);
            return res.json({
              message: error,
            });
          }
          console.log("SIGNUP EMAIL SENT", body);
          return res.json({
            message: `Email has been sent to ${body.name}. Follow the instruction to activate your account`,
          });
        });
      }
    });
  });
};

exports.resetPassword = (req, res, next) => {
  const { resetPasswordLink, newPassword } = req.body;
  if (resetPasswordLink) {
    jwt.verify(resetPasswordLink, config.JWT_RESET_PASSWORD, function (
      err,
      response
    ) {
      if (err) {
        console.log("RESET PASSWORD LINK ERROR", err);
        return res.status(400).json({
          error: `Expired reset password link error `,
        });
      }
      User.findOne({ resetPasswordLink }, (err, user) => {
        if (err || !user) {
          console.log("NO user Found", err);
          return res.status(400).json({
            error: `NO user Found `,
          });
        }
        const updatePassword = {
          password: newPassword,
          resetPasswordLink: "",
        };
        user = _.extend(user, updatePassword);
        user.save((err, result) => {
          if (err) {
            console.log("reset password saving ERROR", err);
            return res.status(400).json({
              error: `reset password saving ERROR `,
            });
          }
          res.json({
            message: `Great ,${result.name} now you can login with new password`,
          });
        });
      });
    });
  }
};
