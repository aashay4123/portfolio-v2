const config = require("../config");

const { OAuth2Client } = require("google-auth-library");
const fetch = require("node-fetch");
const client = new OAuth2Client(config.GOOGLE_CLIENT_ID);

exports.googleLogin = (req, res) => {
  const { idToken } = req.body;
  client
    .verifyIdToken({ idToken, audience: config.GOOGLE_CLIENT_ID })
    .then((response) => {
      console.log("GOOGLE LOGIN RESPONSE", response);
      const { email_verified, name, email } = response.payload;
      if (!email_verified) {
        return res.status(400).json({
          error: "GOOGLE User with that email does not exist.",
        });
      } else {
        User.findOne({ email }).exec((err, user) => {
          if (err) {
            return res.status(400).json({
              error: "GOOGLE User with that email does not exist.",
            });
          }
          if (user) {
            const token = jwt.sign({ _id: user._id }, config.JWT_SECRET, {
              expiresIn: "1d",
            });
            const { _id, email, name, role } = user;
            return res.json({
              token,
              user: { _id, email, name, role },
            });
          } else {
            let password = email + config.JWT_SECRET;
            newUser = new User({ email, name, password });
            newUser.save((err, data) => {
              if (err) {
                return res.status(400).json({
                  error: "GOOGLE User Save ERROR.",
                });
              }
              const token = jwt.sign({ _id: data._id }, config.JWT_SECRET, {
                expiresIn: "2h",
              });
              const { _id, email, name, role } = data;
              return res.json({
                token,
                user: { _id, email, name, role },
              });
            });
          }
        });
      }
    })
    .catch((err) => {
      return res.status(400).json({
        error: `GOOGLE User Login ERROR. ${err} `,
      });
    });
};

exports.facebookLogin = (req, res) => {
  console.log("facebook body", req.body);
  const { userID, accessToken } = req.body;
  const url = `https://graph.facebook.com/v2.11/${userID}/?fields=id,name,email&access_token=${accessToken}`;
  return fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((response) => {
      const { email, name } = response;
      if (!email) {
        return res.status(400).json({
          error: "FACEBOOK User with that email does not exist.",
        });
      } else {
        User.findOne({ email }).exec((err, user) => {
          if (err) {
            return res.status(400).json({
              error: "FACEBOOK User with that email does not exist.",
            });
          }
          if (user) {
            const token = jwt.sign({ _id: user._id }, config.JWT_SECRET, {
              expiresIn: "1d",
            });
            const { _id, email, name, role } = user;
            return res.json({
              token,
              user: { _id, email, name, role },
            });
          } else {
            let password = email + config.JWT_SECRET;
            newUser = new User({ email, name, password });
            newUser.save((err, data) => {
              if (err) {
                return res.status(400).json({
                  error: "Facebook User Save ERROR.",
                });
              }
              const token = jwt.sign({ _id: data._id }, config.JWT_SECRET, {
                expiresIn: "2h",
              });
              const { _id, email, name, role } = data;
              return res.json({
                token,
                user: { _id, email, name, role },
              });
            });
          }
        });
      }
    })
    .catch((err) => {
      return res.status(400).json({
        error: `facebook User Login ERROR. ${err} `,
      });
    });
};
