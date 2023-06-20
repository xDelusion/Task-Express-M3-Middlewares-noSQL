// when we specify the four params below express will automatically
// recognize it as an error handler middleware, and express will this
// middleware when there is an error

module.exports = (error, req, res, next) => {
  return (
    res
      .status(error.status || 500)
      // we don't know what type of status here we need to send because
      // based on the error the status code might change.
      // what we're saying in line 7, is if .status() exist in any file
      // just show it as sepcified in the function in other files
      // - if not - show the status code 500
      .json({ message: error.message || "Internal server error" })
    // same concept as above, if there is an error msg show it
    // - if not - show the msg mentioned here which is "Internal server error"
  );
};
