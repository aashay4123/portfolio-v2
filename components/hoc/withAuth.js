import React from "react";
import BaseLayout from "../Layout/Layout";
import BasePage from "../BaseWrapper";

export default (role) => (Component) =>
  class withAuth extends React.Component {
    static async getInitialProps(args) {
      const pageProps =
        (await Component.getInitialProps) &&
        (await Component.getInitialProps(args));
      return { ...pageProps };
    }

    renderProtectedPage() {
      const { isAuthenticated, user } = this.props.auth;
      const userRole = user && user.role;
      let isAuthorized = false;
      if (role) {
        if (userRole && userRole === role) {
          isAuthorized = true;
        }
      } else {
        isAuthorized = false;
      }

      if (!isAuthenticated) {
        return (
          <BaseLayout auth={this.props.auth}>
            <BasePage>
              <h1>
                {" "}
                You are not authenticated. Please Login to access this page.{" "}
              </h1>
            </BasePage>
          </BaseLayout>
        );
      } else if (!isAuthorized) {
        return (
          <BaseLayout auth={this.props.auth}>
            <BasePage>
              <h1>
                {" "}
                You are not authorized. You dont have a permission to visit this
                page{" "}
              </h1>
            </BasePage>
          </BaseLayout>
        );
      } else {
        return <Component {...this.props} />;
      }
    }

    render() {
      return this.renderProtectedPage();
    }
  };
