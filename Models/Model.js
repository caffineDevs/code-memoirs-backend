const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NewSnippet = new Schema({
  heading: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  subHeading: {
    type: String,
  },
  notes: {
    type: String,
  },
  images: {
    type: String,
  },
  snippet: {
    type: String,
  },
});

module.exports = mongoose.model("code_snippets", NewSnippet);
