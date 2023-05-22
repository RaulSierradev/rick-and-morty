let myFavorites = [];

function postFav(req, res) {
  myFavorites.push(req.body);
  return res.status(200).json(myFavorites);
}

function deleteFav(req, res) {
  const { id } = req.params;
  const deleteChar = myFavorites.filter((char) => {
    return char.id !== id;
  });
  myFavorites = deleteChar
  return res.status(200).json(myFavorites);
}

module.exports = { postFav, deleteFav };
