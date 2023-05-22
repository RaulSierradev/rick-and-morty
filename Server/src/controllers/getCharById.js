const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;

    const { name, gender, image, status, origin, species } = (
      await axios(URL + id)
    ).data;
    const character = {
      id,
      name,
      gender,
      image,
      status,
      origin: origin?.name,
      species,
    };

    return character
      ? res.status(200).json(character)
      : res.status(404).send("Character not found");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
// const { id } = req.params;
// axios(URL + id)
//   .then(({data}) => {
//     const character = {
//       id: data.id,
//       name: data.name,
//       gender: data.gender,
//       species: data.species,
//       origin: data.origin?.name,
//       image: data.image,
//       status: data.status,
//     };
//     return character
//       ? res.status(200).json(character)
//       : res.status(404).send("Not found");
//   })
//   .catch((error) => res.status(500).send(error.message));

module.exports = { getCharById };
