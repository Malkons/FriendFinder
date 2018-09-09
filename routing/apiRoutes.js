// Load data
var friends = require("../app/data/friends");

// Routing
module.exports = function (app) {

    // GET request for the api/friends returns the data in the friends.js in JSON format
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });
    //console.log(friend);

    // POST request for adding a new object to the friendsArray
    app.post("/api/friends", function (req, res) {
        friends.push(req.body);

        // Empty object for the best match 
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: Infinity
        };

        // Create a variable and set it equal to the request body 
        var userData = req.body;

        // Create a variable and set it equal to 0
        var totalDifference = 0;

        // This first loop will run through the friendsArray 
        for (var i = 0; i < (friends.length-1); i++) {
            totalDifference = 0;
            // This second loop will compare the user scores with the scores stored within the friendsArray
            for (var j = 0; j < friends[i].scores[j]; j++) {
                // Add to the variable totalDifference the result of subtracting the user scores with the scores stored within the friendsArray 
                totalDifference += Math.abs(parseInt(userData.scores[j]) - parseInt(friends[i].scores[j]));
                // Key value pairs for the best match object
                if (totalDifference <= bestMatch.friendDifference) {
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = totalDifference;
                }// End of Conditional
            }// End of Second for loop
        }// End of first for loop

        res.json(bestMatch);

    });
};
