import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { getcookie, signout, updateUser } from "../components/helper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import config from "../server/config";
import BaseWrapper from "../components/BaseWrapper";
import { Router } from "../routes";
import withAuth from "../components/hoc/withAuth";
import { loadProfile } from "../actions";

const Private = ({ auth }) => {
  const [values, setValues] = useState({
    role: "",
    name: "",
    email: "",
    password: "",
    buttonText: "Submit",
  });

  const token = getcookie("token");

  useEffect(() => {
    loadProfile(auth, token)
      .then((response) => {
        const { role, name, email } = response;
        setValues({ ...values, role, name, email });
      })
      .catch((error) => {
        console.log("PRIVATE PROFILE UPDATE ERROR", error.response.data.error);
        if (error.response.status === 401) {
          signout(() => {
            Router.pushRoute("/");
          });
        }
      });
  }, []);

  const { role, name, email, password, buttonText } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, buttonText: "Submitting" });
    axios({
      method: "PUT",
      url: `${process.env.BASE_URL}/api/v1/auth/user/update`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: { name, password },
    })
      .then((response) => {
        updateUser(response, () => {
          setValues({ ...values, buttonText: "Submitted" });
          toast.success("Profile updated successfully");
          Router.pushRoute("/private");
        });
      })
      .catch((error) => {
        console.log("PRIVATE PROFILE UPDATE ERROR", error);
        setValues({ ...values, buttonText: "Submit" });
        toast.error(error.response.data.error);
      });
  };

  const updateForm = () => (
    <form>
      <div className="form-group">
        <label className="text-muted">Role</label>
        <input
          defaultValue={role}
          type="text"
          className="form-control"
          disabled
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Name</label>
        <input
          onChange={handleChange("name")}
          value={name}
          type="text"
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label className="text-muted">Email</label>
        <input
          defaultValue={email}
          type="email"
          className="form-control"
          disabled
        />
      </div>

      <div className="form-group">
        <label className="text-muted">Password</label>
        <input
          onChange={handleChange("password")}
          value={password}
          type="password"
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
    <Layout auth={auth}>
      <BaseWrapper title="Profile">
        <div className="col-md-6 offset-md-3">
          <ToastContainer />
          <p className="lead text-center">Profile update</p>
          {updateForm()}
        </div>
      </BaseWrapper>
    </Layout>
  );
};

export default withAuth("subscriber")(Private);
