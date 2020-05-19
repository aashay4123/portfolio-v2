import React, { useState } from "react";
import Link from "next/link";
import { Router } from "../../routes";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { authenticate } from "../../components/helper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import config from "../../server/config";
import BaseWrapper from "../../components/BaseWrapper";
import { withRouter } from "next/router";

// import Facebook from "../services/facebook";
// import Google from "../services/google";

const Signin = (props, { router }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    buttonText: "Submit",
  });
  const { email, password, buttonText } = values;
  const auth = props.auth;
  const informParent = (response) => {
    authenticate(response, () => {
      setValues({
        ...values,
        email: "",
        password: "",
        success: true,
        buttonText: "submitted",
      });
      toast.success(`hey ${response.data.user.name} welcome back!!`);
      Router.pushRoute("/");
    });
  };
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, buttonText: "submitting" });
    axios({
      method: "POST",
      url: `${process.env.BASE_URL}/api/v1/auth/signin`,
      data: { email, password },
    })
      .then((response) => {
        console.log("SIGNIN SUCCESS", response);
        informParent(response);
      })
      .catch((error) => {
        console.log("SIGNIN ERROR", error);
        setValues({ ...values, buttonText: "submit" });
        toast.error(error.response.data.error);
      });
  };

  const signinForm = () => (
    <form>
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
    <Layout title="signin page" auth={auth}>
      <BaseWrapper>
        <div className="col-md-6 offset-med-3">
          <ToastContainer />
          {auth.isAuthenticated ? Router.pushRoute("/") : null}
          <h1 className="p-5 text-center">Signin</h1>
          {/* <Google informParent={informParent} />
          <Facebook informParent={informParent} /> */}
          <p className="lead text-center">OR</p>
          {signinForm()}
          <br />
          <Link href="/auth/forgot">
            <a className="btn btn-sm btn-outline-danger"> Forgot Password </a>
          </Link>
        </div>
      </BaseWrapper>
    </Layout>
  );
};

export default withRouter(Signin);
