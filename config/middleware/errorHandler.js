const errorHandler = (err, req, res, next) => {
  switch (err.code) {
    case 400:
      return res.status(400).json({
        error: 400,
        message: 'There was a problem with your request.'
      });

    case 401:
      return res.status(401).json({
        error: 401,
        message: 'You are unathorized to view the content.'
      });

    case 403:
      return res.status(403).json({
        error: 403,
        message:
          "Forbidden: You don't have permission to access the endpoint on this server"
      });

    case 404:
      return res.status(404).json({
        error: 404,
        message: 'The requested content does not exist.'
      });

    default:
      res.status(500).json({
        error: 500,
        message: 'There was an error performing the required operation'
      });
  }
};

module.exports = {
  errorHandler
};
