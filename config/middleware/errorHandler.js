const errorHandler = (err, req, res, next) => {
  switch (err.code) {
    case 400:
      return res.status(400).json({
        'http error code': 400,
        message: 'Bad Request'
      });

    case 401:
      return res.status(401).json({
        'http error code': 401,
        message: 'You are unathorized to view the content'
      });

    case 402:
      return res.status(401).json({
        'http error code': 402,
        message: 'Payment Required'
      });

    case 403:
      return res.status(403).json({
        'http error code': 403,
        message: 'Forbidden: Access Denied'
      });

    case 404:
      return res.status(404).json({
        'http error code': 404,
        message: 'Not Found'
      });

    default:
      res.status(500).json({
        'http error code': 500,
        message: 'There was an error performing the required operation'
      });
  }
};

module.exports = {
  errorHandler
};
