import cookie from "js-cookie";
import jwt from "jsonwebtoken";
import { Router } from "../routes";

//set in cookie
export const setcookie = (key, value) => {
  if (typeof window !== "undefined") {
    cookie.set(key, value, {
      expires: 1,
    });
  }
};
//remove in cookie
export const removecookie = (key) => {
  if (typeof window !== "undefined") {
    cookie.remove(key, {
      expires: 1,
    });
  }
};

//get cookie
export const getcookie = (key) => {
  if (typeof window !== "undefined") {
    return cookie.get(key);
  }
};
//set in localStorage
export const setLocalStorage = (key, value) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};
//remove in localStorage
export const removeLocalStorage = (key, value) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
};

//store token and user data in storage
export const authenticate = (response, next) => {
  setcookie("token", response.data.token);
  setLocalStorage("user", response.data.user);
  next();
};

//get data from localstorage

// signout
export const signout = (next) => {
  removecookie("token");
  removeLocalStorage("user");
  next();
};

export const updateUser = (response, next) => {
  setLocalStorage("user", response.data);
  next();
};

export const isAuth = () => {
  if (typeof window !== "undefined") {
    let cookiecheck = getcookie("token");
    let data = jwt.decode(cookiecheck);
    if (cookiecheck) {
      let current_time = new Date().getTime() / 1000;
      if (current_time > data.exp) {
        signout(() => {
          Router.pushRoute("/");
        });
      }
      if (localStorage.getItem("user")) {
        return JSON.parse(localStorage.getItem("user"));
      } else {
        return false;
      }
    }
  }
};

export const serverAuth = async (req) => {
  if (req.headers.cookie) {
    let token = getCookieFromReq(req);
    let data = jwt.decode(token);
    let current_time = new Date().getTime() / 1000;
    if (!data || current_time > data.exp) {
      return false;
    } else {
      let user = {
        _id: data._id,
        name: data.name,
        email: data.email,
        role: data.role,
      };
      return user;
    }
  }
  return undefined;
};

export const getCookieFromReq = (req) => {
  let cookie = req.headers.cookie
    .split(";")
    .find((c) => c.trim().startsWith(`token=`));
  if (!cookie) {
    return undefined;
  }
  return cookie.split("=")[1];
};
