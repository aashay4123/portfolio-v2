import React, { useState, useEffect } from "react";
import Layout from "../../../components/Layout/Layout";
import jwt from "jsonwebtoken";
import axios from "axios";
import BaseWrapper from "../../../components/BaseWrapper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import config from "../../../server/config";
import { Router } from "../../../routes";

class Reset extends React.Component {
  static async getInitialProps(ctx) {
    return { token: ctx.query.token };
  }
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      token: "",
      newPassword: "",
      buttonText: "Reset Password ",
    };
  }
  componentDidMount() {
    let token = this.props.token;
    let decoded = jwt.decode(token);

    if (token && decoded) {
      let name = decoded.name;
      this.setState({ name, token });
    }
  }

  handleChange(event) {
    this.setState({ newPassword: event.target.value });
  }

  clickSubmit(event) {
    event.preventDefault(); // IMP
    this.setState({ buttonText: "Reseting password" });
    const { newPassword, token } = this.state;
    axios({
      method: "PUT",
      url: `${config.NAMESPACE}/api/v1/auth/reset-password`,
      data: { newPassword, resetPasswordLink: token },
    })
      .then((response) => {
        console.log("Reset PASSWORD SUCCESS", response);
        toast.success(response.data.success);
        this.setState({ buttonText: "Reset Completed" });
        Router.pushRoute("/");
      })
      .catch((error) => {
        console.log("Reset PASSWORD ERROR", error);
        this.setState({ buttonText: "Reset Failed" });
        toast.error(error.response.data.error);
      });
  }

  ResetPasswordForm() {
    return (
      <form>
        <div className="form-group">
          <label className="text-muted">
            <strong>New Password</strong>
          </label>
          <input
            onChange={() => this.handleChange(event)}
            type="password"
            value={this.state.newPassword}
            className="form-control"
            placeholder="Type new password"
            required
          />
        </div>

        <div>
          <button
            className="btn btn-dark"
            onClick={() => this.clickSubmit(event)}
          >
            <strong> {this.state.buttonText}</strong>
          </button>
        </div>
      </form>
    );
  }

  render() {
    return (
      <Layout auth={this.props.auth}>
        <BaseWrapper>
          <div className="col-md-6 offset-med-3">
            <ToastContainer />
            <strong className="p-5 text-center">
              Hey {this.state.name}, enter new password
            </strong>
            <hr />
            {this.ResetPasswordForm()}
          </div>
        </BaseWrapper>
      </Layout>
    );
  }
}

export default Reset;
