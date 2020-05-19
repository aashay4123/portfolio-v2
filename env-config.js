const prod = process.env.NODE_ENV === "production";

module.exports = {
  "process.env.BASE_URL": prod
    ? "https://aashayphirke.herokuapp.com"
    : "http://localhost:3000",
};
