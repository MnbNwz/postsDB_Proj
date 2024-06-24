const express = require("express");
const router = express.Router();

const postsRouter = require("./Posts");

router.use("/posts", postsRouter);

module.exports = router;
