import React, { useState } from "react";
import Link from "next/link";
import Router from "next/router";
import Layout from "../../Layout/Layout";
import axios from "axios";
import { authenticate, isAuth } from "../../components/helper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import config from "../../server/config";
import BaseWrapper from "../../components/BaseWrapper";
// import Facebook from "../services/facebook";
// import Google from "../services/google";

const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    buttonText: "Submit",
  });
  const { email, password, buttonText } = values;

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
      console.log(response.data);
      isAuth() ? Router.push("/") : null;
      // isAuth() && isAuth().role === "admin"
      //   ? Router.push("/admin")
      //   : Router.push("/private");
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
      url: `${config.NAMESPACE}/api/v1/auth/signin`,
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
    <Layout>
      <BaseWrapper>
        <div className="col-md-6 offset-med-3">
          <ToastContainer />
          {isAuth() ? Router.push("/private") : null}
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

export default Signin;
