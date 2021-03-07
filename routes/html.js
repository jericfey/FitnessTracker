const path = require("path");
const router = require("express").Router();

const sendPage = (res, page) => {
  res.sendFile(path.join(__dirname, page));
};

//Home page displays index.html
router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

//Page to add new exercises
router.get("/exercise", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

//Page to update exercises
// router.get("/exercise?", function (req, res) {
//   res.sendFile(path.join(__dirname, "../public/exercise.html"));
// });

//Page to display stats
router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;
