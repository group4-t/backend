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
const addToUserFav = (req, res) => {
  const input = {
    id: req.body.idu,
    trackId: req.body.trackId,
  };
  const theUser = users.filter((ele) => {
    return ele.id == input.id;

  });
  console.log(theUser);
  theUser[0].Fav.push({ trackId: input.trackId });
  console.log(theUser[0].Fav, "theUser.fav");
  addToFileFunction(users);
  res.json(users);
};

//remove from User Fav
const removeFromUserFav = (req, res) => {
  const input = {
    id: req.body.idu,
    trackId: req.body.trackId,
  };
  const theUser = users.filter((ele) => {
    return ele.id == input.id;
  });
  console.log(theUser);
let indexx  = theUser[0].Fav.forEach((element , i ) => {
if(element.trackId ==  input.trackId){
  console.log(i,"here")
   theUser[0].Fav.splice(i , 1 ); //{ trackId: input.trackId }
  // theUser[0].Fav.findIndex((ele) => { return ele.trackId == input.trackId } )
  // theUser[0].Fav.findIndex(element)
  // return i ; 
  // return theUser[0].Fav.indexOf(element)\
  // console.log(element.trackId);\
  // console.log(input.trackId);
}

});
console.log(indexx);
  // theUser[0].Fav.splice(indexx , 1 ); //{ trackId: input.trackId }
  // console.log(theUser[0].Fav, "theUser.fav");
  addToFileFunction(users);
  res.json("done");
};








//add To User Fav
// const addToUserFav = (req, res) => { //ماراح ادخل هنا الا ومعي بالفرونت يوزر اي دي او بقوله بالفرونت سجل اذا مافيه اي دي
//   const userId = req.params.id;
//   const favitemId = req.params.trackId;
//   const user = users.filter((ele) => {
//     return ele.id == userId;
//   });
//   if (user.Fav.length){
//     console.log(user.Fav.length );
//   user.Fav.map((ele) => {
//     if (ele.id == favitemId) {
//       console.log("item already in fav");
//     } else {
//       user.Fav.push(req.body); // how can i push all fav obj?
//     }
//   });

//   addToFileFunction(users);
//   res.json(users);
// };}

module.exports = {
  getAllUsers,
  addToUserFav,
  addNewUser,
  removeFromUserFav
};
