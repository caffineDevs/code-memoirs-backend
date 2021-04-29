const express = require("express");
const router = express.Router();

const snippetCtrl = require("../Controllers/SnippetController");

router.post("/addSnip", snippetCtrl.addSnippet);

router.get("/get", snippetCtrl.getSnippets);

router.get("/delSnip", snippetCtrl.deleteSnippet);

module.exports = router;
