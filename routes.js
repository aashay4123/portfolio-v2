const routes = require("next-routes");

module.exports = routes()
  .add("auth/reset", "/auth/reset/:token")
  .add("auth/activate", "/auth/activate/:token")

  .add("portfolioNew", "/portfolios/new")
  .add("portfolioEdit", "/portfolios/:id/edit")

  .add("projectCreate", "/project/new")
  .add("projectEdit", "/project/:id/edit")

  .add("userBlogs", "/blogs/dashboard")
  .add("blogEditor", "/blogs/new")
  .add("blogDetail", "/blogs/:slug")
  .add("blogEditorUpdate", "/blogs/:id/edit")

  .add("hotel", "/project/css/hotel")
  .add("natour", "/project/css/natour");
