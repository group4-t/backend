const fs = require("fs");

let users = [];

// //read file
fs.readFile("./db/users.json", (err, data) => {
  users = JSON.parse(data.toString());
});

//write on file
const addToFileFunction = (newFav) => {
  fs.writeFile("./db/users.json", JSON.stringify(newFav), () => {});
};

//test
const getAllUsers = (req, res) => {
  res.json(users);
};

//add a new user
const addNewUser = (req, res) => {
  const user = {
    id: req.body.id,
    userName: req.body.userName,
    Fav: req.body.Fav,
  };
  users.push(user);
  addToFileFunction(users);
  res.json(users);
};

//add To User Fav

const addToUserFav = (req, res) => { //ماراح ادخل هنا الا ومعي بالفرونت يوزر اي دي او بقوله بالفرونت سجل اذا مافيه اي دي 
  const userId = req.params.id;
  const favitemId = req.params.trackId;
  const user = users.filter((ele) => {
    return ele.id == userId;
  });
  if (user.Fav.length){
    console.log(user.Fav.length );
  user.Fav.map((ele) => {
    if (ele.id == favitemId) {
      console.log("item already in fav");
    } else {
      user.Fav.push(req.body); // how can i push all fav obj?
    }
  });
  
  addToFileFunction(users);
  res.json(users);
};}

module.exports = {
  getAllUsers,
  addToUserFav,
  addNewUser,
};
