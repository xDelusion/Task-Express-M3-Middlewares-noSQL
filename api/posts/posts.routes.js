const express = require("express");
const router = express.Router();
const uploader = require("../../middlewares/uploader");
const {
  postsGet,
  postsUpdate,
  postsDelete,
  postsCreate,
  fetchPost,
  getPostById,
} = require("./posts.controllers");

router.param("postId", async (req, res, next, postId) => {
  // I'm telling router whenever you see "postId"
  // call the function that comes after it
  try {
    const foundPost = fetchPost(postId);
    // I want to return foundPost  = and use fetchPost(postId) Fn
    if (!foundPost) {
      return next({ status: 404, message: "Post not found" });
    }
    // console.log(foundPost);
    req.post = foundPost;
    return next(); // without next() postman would not show anything
    /*            // with next() activated it should an show error msg/ status code  */
  } catch (error) {
    return next(error);
  }
});

router.get("/", postsGet);
router.post("/", uploader.single("image"), postsCreate);

router.delete("/:postId", postsDelete);

router.put("/:postId", postsUpdate);

router.get("/:postId", getPostById);

module.exports = router;
