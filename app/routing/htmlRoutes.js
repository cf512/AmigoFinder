module.exports = function(app, path) {

// homepage route
// =============================================================

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

// survey route
// =============================================================

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

}