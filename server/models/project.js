const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("mongoose-type-url");
const setStringType = (maxLength) => ({
  type: String,
  required: true,
  maxlength: maxLength,
});

const projectSchema = new Schema(
  {
    userId: setStringType(512),
    title: setStringType(256),
    language: setStringType(256),
    typeof: setStringType(128),
    description: setStringType(2048),
    url: mongoose.SchemaTypes.Url,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
