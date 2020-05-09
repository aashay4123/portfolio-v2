import React, { useState, useEffect } from "react";
import Layout from "../../../Layout/Layout";
import axios from "axios";
import jwt from "jsonwebtoken";
import BaseWrapper from "../../../components/BaseWrapper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import config from "../../../server/config";

const Activate = (qtoken) => {
  const [values, setValues] = useState({
    name: "",
    Token: "",
    show: true,
  });
  useEffect(() => {
    let Token = qtoken.token;
    let { name } = jwt.decode(Token);
    if (Token) {
      setValues({ ...values, Token, name });
    }
  }, []);

  const { name, Token } = values;

  const clickSubmit = (event) => {
    event.preventDefault();
    axios({
      method: "POST",
      url: `${config.NAMESPACE}/api/v1/auth/account_activate`,
      data: { Token },
    })
      .then((response) => {
        console.log("ACCOUNT ACTIVATION", response);
        setValues({ ...values, show: false });
        toast.success(response.data.message);
      })
      .catch((error) => {
        console.log("ACCOUNT ACTIVATION ERROR", error.response.data.error);
        toast.error(error.response.data.error);
      });
  };

  const activationLink = () => (
    <div className="text-center">
      <h1 className="p-5">Hey {name}, Ready to activate your account?</h1>
      <button className="btn btn-outline-dark" onClick={clickSubmit}>
        <strong>Activate Account</strong>
      </button>
    </div>
  );
  console.log(values);

  return (
    <Layout>
      <BaseWrapper>
        <div className="col-md-6 offset-md-3">
          <ToastContainer />
          {activationLink()}
        </div>
      </BaseWrapper>
    </Layout>
  );
};
Activate.getInitialProps = (ctx) => {
  return { token: ctx.query.token };
};
export default Activate;
