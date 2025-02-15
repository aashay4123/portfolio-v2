import React from "react";
import BaseLayout from "../components/Layout/Layout";
import BasePage from "../components/BaseWrapper";

import { Row, Col } from "reactstrap";

import { getBlogBySlug } from "../store/actions";

class BlogDetail extends React.Component {
  static async getInitialProps({ query }) {
    let blog = {};
    const slug = query.slug;

    try {
      blog = await getBlogBySlug(slug);
    } catch (err) {
      console.error(err);
    }

    return { blog };
  }

  render() {
    const { blog, auth } = this.props;

    return (
      <BaseLayout auth={auth}>
        <BasePage className="blog-detail-page">
          <Row>
            <Col md={{ size: 8, offset: 2 }}>
              <div dangerouslySetInnerHTML={{ __html: blog.story }}></div>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default BlogDetail;
