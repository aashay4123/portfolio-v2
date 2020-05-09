import React from "react";
import GoogleLogin from "react-google-login";
import axios from "axios";
import config from "../../../server/config";

const Google = ({ informParent = (f) => f }) => {
  const responseGoogle = (response) => {
    console.log(response);
    axios({
      method: "POST",
      url: `${config.NAMESPACE}/google-login`,
      data: { idToken: response.tokenId },
    })
      .then((response) => {
        console.log("GOOGLE SIGNIN SUCCESS", response);
        informParent(response);
      })
      .catch((err) => {
        console.log("GOOGLE SIGNIN ERROR", err.response);
      });
  };
  return (
    <div className="pb-3">
      <GoogleLogin
        clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
        render={(renderProps) => (
          <button
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            className="btn btn-success btn-lg btn-block"
          >
            <i class="fab fa-google pr-2"></i> Login with Google
          </button>
        )}
      />
    </div>
  );
};

export default Google;
