import React from "react";
import Layout from "../../../components/Layout/Layout";
import axios from "axios";
import jwt from "jsonwebtoken";
import BaseWrapper from "../../../components/BaseWrapper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import config from "../../../server/config";
import { Router } from "../../../routes";

class Activate extends React.Component {
  static async getInitialProps(ctx) {
    return { token: ctx.query.token };
  }
  constructor(props) {
    super();

    this.state = {
      name: "",
      Token: "",
      show: true,
    };
  }
  componentDidMount() {
    let Token = this.props.token;
    let decoded = jwt.decode(Token);

    if (Token && decoded) {
      let name = decoded.name;
      this.setState({ name, Token });
    }
  }
  clickSubmit(event) {
    event.preventDefault();
    const { Token } = this.state;
    axios({
      method: "POST",
      url: `${config.NAMESPACE}/api/v1/auth/account_activate`,
      data: { Token },
    })
      .then((response) => {
        console.log("ACCOUNT ACTIVATION", response);
        this.setState({ show: false });
        toast.success(response.data.message);
        Router.pushRoute("/");
      })
      .catch((error) => {
        console.log("ACCOUNT ACTIVATION ERROR", error.response.data.error);
        toast.error(error.response.data.error);
      });
  }

  activationLink() {
    return (
      <div className="text-center">
        <h1 className="p-5">
          Hey {this.state.name}, Ready to activate your account?
        </h1>
        <button
          className="btn btn-outline-dark"
          onClick={() => this.clickSubmit(event)}
        >
          <strong>Activate Account</strong>
        </button>
      </div>
    );
  }
  render() {
    return (
      <Layout auth={this.props.auth}>
        <BaseWrapper>
          <div className="col-md-6 offset-md-3">
            <ToastContainer />
            {this.activationLink()}
          </div>
        </BaseWrapper>
      </Layout>
    );
  }
}

export default Activate;
