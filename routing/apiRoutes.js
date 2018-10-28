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
    var scoresArray = [];
    var bestMatch = 0;
    var scores = newProfile.scores;
    var matchName= "";
    var matchImage = "";
    var totalDifference = 1000;

    for (var i =0; i<friends.length; i++) {
        var difference = 0;
        for (var a=0; a< scores.length; a++) {
            difference += Math.abs(friends[i].scores[a] - scores[a]);
        }
        scoresArray.push(difference);
        if (difference < totalDifference) {
            totalDifference=difference;
            matchName = friends[i].name;
            matchImage = friends[i].photo;
        }
    }
  
   
    response.json({matchName: matchName, matchImage: matchImage});


 

    friendsArray.push(newProfile);
});
}



