const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

function getCharById(req, res) {
  const { id } = req.params;
  axios(URL + id)
    .then(({data}) => {
      const character = {
        id: data.id,
        name: data.name,
        gender: data.gender,
        species: data.species,
        origin: data.origin?.name,
        image: data.image,
        status: data.status,
      };
      return character
        ? res.status(200).json(character)
        : res.status(404).send("Not found");
    })
    .catch((error) => res.status(500).send(error.message));
}

// function getCharById(res, id) {
//   axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((result) => result.data)
//     .then((data) => {
//       const character = {
//         id: data.id,
//         name: data.name,
//         gender: data.gender,
//         species: data.species,
//         origin: data.origin?.name,
//         image: data.image,
//         status: data.status,
//       };
//       res.writeHead(200, { "Content-type": "aplication/json" });
//       res.end(JSON.stringify(character));
//     })
//     .catch((error) => {
//       res.writeHead(500, { "Content-type": "text/plain" });
//       res.end(error.message);
//     });
// }

module.exports = { getCharById };
