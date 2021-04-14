const NewSnippet = require("../Models/Model");

const addSnippet = (req, res) => {
  console.log(".........object.............");
  const body = req.body;
  const newSnippet = new NewSnippet(body);

  if (!newSnippet) {
    return res.status(400).json({ success: false, error: err });
  }

  newSnippet
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        snippetId: newSnippet._id,
        message: "Snippet added successfully !",
      });
    })
    .catch((err) => {
      res.status(400).json({
        err,
        message: "Snippet creation failed !",
      });
    });
};

const getSnippets = (req, res) => {
};

module.exports = { addSnippet, getSnippets };
