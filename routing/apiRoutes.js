//require packages
var path = require("path");
var friends = require("../data/friends.js");

module.exports = function(app) {

//get list of friends in system
app.get("/api/friends", function (request, response){
    response.json(friends);
});

// create new profile - takes in JSON input
app.post("/api/friends", function (request, response) {
    var newProfile = req.body;
    console.log(newProfile);

    //scores for new profile
    var scores = newProfile.scores;

    //need loop for friends array
    for (var i =0; i<friendsArray.length; i++) {

    }

    friendsArray.push(newProfile);
    response.json(newProfile);
});
}



