const Post = require("../../models/Post");

exports.fetchPost = async (postId) => {
  // this Fn will be called whenever I'm looking for postId
  const foundPost = await Post.findById(postId);
  return foundPost;
}; // this function's job is to go to the database and get me what's specified

exports.postsCreate = async (req, res, next) => {
  try {
    const newPost = await Post.create(req.body);
    res.status(201).json(newPost);
  } catch (error) {
    return next(error);
  }
};

exports.postsDelete = async (req, res) => {
  const { postId } = req.params;
  try {
    await req.post.deleteOne(); // as in posts.routes.js req.post = foundPost
    return res.status(204).end();
  } catch (error) {
    return next(error);
  }
};

exports.postsUpdate = async (req, res, next) => {
  try {
    await req.post.updateOne(req.body);
    return res.status(204).end();
  } catch (error) {
    return next(error);
  }
};

exports.postsGet = async (req, res, next) => {
  try {
    const posts = await Post.find();
    return res.json(posts);
  } catch (error) {
    return next(error);
  }
};

exports.getPostById = async (req, res, next) => {
  try {
    return res.status(200).json(req.post);
  } catch (error) {
    return next(error);
  }
};
