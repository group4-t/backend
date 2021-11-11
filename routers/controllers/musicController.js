const fs = require("fs");
const axios = require("axios");

const getAllMusic = async (req, res) => {
  try {
    const result = await axios.get(
      `https://itunes.apple.com/search?term=music`
    );
    res.status(200).json(result.data.results);
  } catch (error) {
    console.log(error.message);
  }
};

const getMusicById = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await axios.get(`https://itunes.apple.com/lookup?id=${id}`);
    res.status(200).json(result.data.results[0]);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
    getAllMusic,
  getMusicById,
};
