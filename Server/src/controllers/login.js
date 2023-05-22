const users = require("../utils/users");

<<<<<<< HEAD
function login(req, res) {
  const { email, password } = req.query;
  let access = false;

  users.forEach((user) => {
    if (user.email === email && user.password === password) access = true;
  });
  return res.status(200).json({ access });
}

module.exports = { login };
=======
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
>>>>>>> 63184caa624868dc907ae13fdc5819a61015c833
