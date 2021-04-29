const NewSnippet = require("../Models/Model");

const addSnippet = (req, res) => {
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
  NewSnippet.find({}, (err, snippets) => {
    if (err || !snippets.length) {
      return res.status(200).json({ success: false, error: "No snippets" });
    }
    const tags = snippets.map((snippet) => snippet.tags).flat();
    return res
      .status(200)
      .json({ success: true, snippets: snippets, tags: tags });
  });
};

const deleteSnippet = async (req, res) => {
  await NewSnippet.findOneAndDelete({ _id: req.params.id }, (err, snippet) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!snippet) {
      return res
        .status(404)
        .json({ success: false, error: `snippet not found` });
    }

    return res.status(200).json({ success: true });
  }).catch((err) => console.log(err));
};

module.exports = { addSnippet, getSnippets };
