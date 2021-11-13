const fs = require("fs");
const axios = require("axios");
const itunesApiSearch = require("itunes-api-search");

const getAll = async (req, res) => {
  try {
    const result = await axios.get(`https://itunes.apple.com/search?term=all`);
    res.status(200).json(result.data.results);
  } catch (error) {
    console.log(error.message);
  }
};
const search = (req, res) => {
  const term = req.params.term;
  let result = {};
  itunesApiSearch
    .search(
      term,
      {
        limit: 50, // maxx 200
      },
      function (err, res) {
        if (err) {
          res.status(400).json(err);
          return;
        }
        result = res;
        console.log(result);
      }
    )
    .then(() => {
      res.status(201).json(result);
    });
};
const getAllById = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await axios.get(`https://itunes.apple.com/lookup?id=${id}`);
    res.status(200).json(result.data.results[0]);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAll,
  getAllById,
  search,
};
