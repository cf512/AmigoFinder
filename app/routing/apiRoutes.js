const friends=require("../data/friends.js");

module.exports = function(app) {

// api friends route
// =============================================================

app.get("/api/friends", function(req, res) {
    res.json(friends);
});

}