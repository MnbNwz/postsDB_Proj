const express = require("express");
const postsController = require("../Controller/Posts");

// router.post();

const router = express.Router();

// Define routes for posts
router.get("/getAllPosts/", postsController.getAllPosts);
router.get("/getPost/:id", postsController.getPostById);
router.post("/createPost/", postsController.createPost);
// router.put('/:id', postsController.updatePost);
// router.delete('/:id', postsController.deletePost);

module.exports = router;
