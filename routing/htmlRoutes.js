var path = require("path");//connects files

module.exports = function (app) {
    
    //create path to connect html pages
    app.get("/", function (request, response) {
        response.sendFile(path.join(__dirname, "../public/bootstrap/home.html"));
    });

    app.get("/survey", function (request, response) {
        response.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // If no matching route is found default to home
    app.get("*", function(request, response) {
    response.sendFile(path.join(__dirname, "../public/bootstrap/home.html"));
  });

};