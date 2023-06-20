const Post = require("../../models/Post");

// exports.postsCreate = async (req, res) => {
//   try {
//     const newPost = await Post.create(req.body);
//     res.status(201).json(newPost);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.postsDelete = async (req, res) => {
//   const { postId } = req.params;
//   try {
//     const foundPost = await Post.findById(postId);
//     if (foundPost) {
//       await foundPost.deleteOne();
//       res.status(204).end();
//     } else {
//       res.status(404).json({ message: "post not found" });
//     }
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

exports.postsCreate = async (req, res, next) => {
  try {
    const newPost = await Post.create(req.body);
    res.status(201).json(newPost);
  } catch (error) {
    return next(error);
  }
};

// exports.postsDelete = async (req, res) => {
//   const { postId } = req.params;
//   try {
//     const foundPost = await Post.findById(postId);
//     if (foundPost) {
//       await foundPost.deleteOne();
//     } else {
//       res.status(404).json({ message: "post not found" });
//     }
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.postsUpdate = async (req, res) => {
//   const { postId } = req.params;
//   try {
//     const foundPost = await Post.findById(postId);
//     if (foundPost) {
//       await foundPost.updateOne(req.body);
//       res.status(204).end();
//     } else {
//       res.status(404).json({ message: "post not found" });
//     }
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.postsGet = async (req, res) => {
//   try {
//     const posts = await Post.find();
//     res.json(posts);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

exports.postsDelete = async (req, res) => {
  try {
    await req.post.deleteOne(); // as in posts.routes.js req.post = foundPost
    return res.status(204).end();
  } catch (error) {
    return next(error);
  }
};

// exports.postsUpdate = async (req, res, next) => {
//   try {
//     await req.post.updateOne(req.body);
//     return res.status(204).end();
//   } catch (error) {
//     return next(error);
//   }
// };

exports.postUpdate = async (req, res, next) => {
  try {
    console.log(req.body);
    console.log(req.post);

    await req.post.updateOne(req.body);
    return res.status(204).end();
  } catch {
    return next(error);
  }
};

// exports.postsGet = async (req, res, next) => {
//   try {
//     const posts = await Post.find();
//     res.json(posts);
//   } catch (error) {
//     return next({ message: error.message });
//   }
// };

exports.postsGet = async (req, res, next) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    return next(error);
  }
};

exports.fetchPost = async (postId) => {
  // this Fn will be called whenever I'm looking for postId
  const foundPost = await Post.findById(postId);
  return foundPost;
};

exports.getPostById = (req, res, next) => {
  try {
    return res.status(200).json(req.post);
  } catch (error) {
    return next(error);
  }
};
