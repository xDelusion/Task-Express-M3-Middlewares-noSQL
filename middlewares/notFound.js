module.exports = (req, res, next) => {
  return res.status(404).json({ message: "Page not found" });
};

// we don't need to use try-catch cos we're not doing async-await
// this will work on all routes/paths that do not exist
