import React, { useState } from "react";
import { Router } from "../../routes";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import config from "../../server/config";
import BaseWrapper from "../../components/BaseWrapper";

const Signup = (props) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    buttonText: "Submit",
  });
  const { name, email, password, buttonText } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, buttonText: "submitting" });
    axios({
      method: "POST",
      url: `${config.NAMESPACE}/api/v1/auth/signup`,
      data: { name, email, password },
    })
      .then((response) => {
        setValues({
          ...values,
          name: "",
          email: "",
          password: "",
          success: true,
          buttonText: "submitted",
        });
        console.log(response.data.message);
        toast.success(response.data.message);
      })
      .catch((error) => {
        setValues({ ...values, buttonText: "submit" });
        console.log(error);
        toast.error(error.response.data.error);
      });
  };

  const signupForm = () => (
    <form>
      <div className="form-group">
        <label className="text-muted">Name</label>
        <input
          onChange={handleChange("name")}
          type="text"
          value={name}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label className="text-muted">email</label>
        <input
          onChange={handleChange("email")}
          type="text"
          value={email}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label className="text-muted">password</label>
        <input
          onChange={handleChange("password")}
          type="password"
          value={password}
          className="form-control"
        />
      </div>
      <div>
        <button className="btn btn-primary" onClick={clickSubmit}>
          {buttonText}
        </button>
      </div>
    </form>
  );
  return (
    <Layout title="signup page" auth={props.auth}>
      <BaseWrapper>
        <div className="col-md-6 offset-med-3">
          <ToastContainer />
          {props.auth.isAuthenticateed ? Router.pushRoute("/") : null}
          <h1 className="p-5 text-center">Signup</h1>
          {signupForm()}
        </div>
      </BaseWrapper>
    </Layout>
  );
};

export default Signup;
