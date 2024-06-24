const { Posts } = require("../models");

const getAllPosts = async (req, res) => {
  try {
    const lisOfPosts = await Posts.findAll();
    res.status(200).json(lisOfPosts);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Route handler for getting a post by ID
const getPostById = async (req, res) => {
  console.log(req.params);
  const postId = req.params.id; // Assuming the post ID is passed as a route parameter

  try {
    const post = await Posts.findByPk(postId); // findByPk is Sequelize's method to find by primary key

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json(post);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Route handler for creating a new post
const createPost = async (req, res) => {
  try {
    const postBody = req.body;
    const post = await Posts.create(postBody);
    res.status(200).send(post);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
};
