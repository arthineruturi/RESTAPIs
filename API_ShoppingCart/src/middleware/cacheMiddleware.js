const cache = require("../config/cache");

const cacheMiddleware = (key) => {
  return (req, res, next) => {
    const cachedData = cache.get(key);
    if (cachedData) {
      return res.json(cachedData);
    }
    next();
  };
};

module.exports = cacheMiddleware;
