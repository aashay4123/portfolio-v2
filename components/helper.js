import cookie from "js-cookie";

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
  console.log("authenticate user response", response);
  setcookie("token", response.data.token);
  setLocalStorage("user", response.data.user);
  next();
};

//get data from localstorage
export const isAuth = () => {
  if (typeof window !== "undefined") {
    const cookiecheck = getcookie("token");
    if (cookiecheck) {
      if (localStorage.getItem("user")) {
        return JSON.parse(localStorage.getItem("user"));
      } else {
        return false;
      }
    }
  }
};
// signout
export const signout = (next) => {
  removecookie("token");
  removeLocalStorage("user");
  next();
};

export const updateUser = (response, next) => {
  console.log("Update user response", response);
  setLocalStorage("user", response.data);
  next();
};
