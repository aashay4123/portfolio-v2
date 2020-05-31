import React from "react";
import BaseLayout from "../components/Layout/Layout";
import BasePage from "../components/BaseWrapper";

import withAuth from "../components/hoc/withAuth";
import { Router } from "../routes";

import SlateEditor from "../components/slate-editor/Editor";
import { toast } from "react-toastify";

import { createBlog } from "../store/actions";

class BlogEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSaving: false,
      lockId: Math.floor(1000 + Math.random() * 9000),
    };

    this.saveBlog = this.saveBlog.bind(this);
  }

  saveBlog(story, heading) {
    const { lockId } = this.state;
    const blog = {};
    blog.title = heading.title;
    blog.subTitle = heading.subtitle;
    blog.story = story;

    this.setState({ isSaving: true });

    createBlog(blog, lockId)
      .then((createdBlog) => {
        this.setState({ isSaving: false });
        toast.success("Blog Saved Succesfuly!");
        Router.pushRoute(`/blogs/${createdBlog._id}/edit`);
      })
      .catch((err) => {
        this.setState({ isSaving: false });
        toast.error(
          "Unexpected Error, Copy your progress and refresh browser please."
        );
        const message = err.message || "Server Error!";
        console.error(message);
      });
  }

  render() {
    const { isSaving } = this.state;
    const { auth } = this.props;
    return (
      <BaseLayout auth={auth}>
        <BasePage containerClass="editor-wrapper" className="blog-editor-page">
          <SlateEditor isLoading={isSaving} save={this.saveBlog} />
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withAuth("admin")(BlogEditor);
