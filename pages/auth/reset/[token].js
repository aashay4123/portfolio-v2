import React, { useState, useEffect } from "react";
import Layout from "../../../Layout/Layout";
import jwt from "jsonwebtoken";
import axios from "axios";
import BaseWrapper from "../../../components/BaseWrapper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import config from "../../../server/config";
const Reset = ({ ctx }) => {
  const [values, setValues] = useState({
    name: "",
    token: "",
    newPassword: "",
    buttonText: "Reset Password ",
  });
  useEffect(() => {
    let token = ctx;
    let { name } = jwt.decode(token);
    if (token) {
      setValues({ ...values, name, token });
    }
  }, []);
  const { name, token, newPassword, buttonText } = values;

  const handleChange = (event) => {
    setValues({ ...values, newPassword: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, buttonText: "Reseting password" });
    axios({
      method: "PUT",
      url: `${config.NAMESPACE}/api/v1/auth/reset-password`,
      data: { newPassword, resetPasswordLink: token },
    })
      .then((response) => {
        console.log("Reset PASSWORD SUCCESS", response);
        toast.success(response.data.success);
        setValues({ ...values, buttonText: "Reset Completed" });
      })
      .catch((error) => {
        console.log("Reset PASSWORD ERROR", error);
        setValues({ ...values, buttonText: "Reset Failed" });
        toast.error(error.response.data.error);
      });
  };
  const ResetPasswordForm = () => (
    <form>
      <div className="form-group">
        <label className="text-muted">
          <strong>New Password</strong>
        </label>
        <input
          onChange={handleChange}
          type="password"
          value={newPassword}
          className="form-control"
          placeholder="Type new password"
          required
        />
      </div>

      <div>
        <button className="btn btn-dark" onClick={clickSubmit}>
          <strong> {buttonText}</strong>
        </button>
      </div>
    </form>
  );
  return (
    <Layout>
      <BaseWrapper>
        <div className="col-md-6 offset-med-3">
          <ToastContainer />
          <strong className="p-5 text-center">
            Hey {name}, enter new password
          </strong>
          <hr />
          {ResetPasswordForm()}
        </div>
      </BaseWrapper>
    </Layout>
  );
};
Reset.getInitialProps = (ctx) => {
  return { ctx: ctx.query.token };
};

export default Reset;
