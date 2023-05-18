const users = require("../utils/users");

const login = (req, res) => {
  const { email, password } = req.query;
  let access = false;

  users.forEach((char) => {
    if ((char.email = email && char.password === password)) {
      access = true;
    }
  });
  return res.status(200).json({ access });
};

module.exports = {
  login,
};
