const { validationResult } = require("express-validator");

const validator = (request, response, next) => {
  const errors = validationResult(request);
  if (!errors.isEmpty())
    return response.status(400).json({ error: errors.array() });
  next();
};

module.exports = validator;
