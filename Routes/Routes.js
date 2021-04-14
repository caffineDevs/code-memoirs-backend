const express = require("express");
const router = express.Router();

const snippetCtrl = require("../Controllers/SnippetController");

router.post("/addSnip", snippetCtrl.addSnippet);

router.get("/get", snippetCtrl.getSnippets);

module.exports = router;
