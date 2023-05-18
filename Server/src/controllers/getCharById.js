const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");
const getCharById = (req, res) => {
  const { id } = req.params;
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ data }) => {
      const { id, status, name, species, origin, image, gender } = data;
      const character = { id, status, name, species, origin, image, gender };

      return character
        ? res.json(character)
        : res.status(404).send("Not found");
    })
    .catch((error) => res.status(500).send(error.message));
};

module.exports = {
  getCharById
};
