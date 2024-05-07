const express = require("express");
const con = require("./db.js");
const cors = require("cors");
const multer = require("multer");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json);
app.use(cors());
app.use(express.static("imagesupload"));
// ---------connection check----------
con.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL server");
});
// ----------use multer for image upload---------------
// const upload = multer({
//   storage: multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, "imagesupload/");
//     },
//     filename: function (req, file, cb) {
//       cb(null, Date.now() + "-" + file.originalname);
//     },
//   }),
// });

// ---------POST api for submitaitools page------------
app.post("/submit", 
// upload.array("images", 2),
 (req, res) => {
  const {
    name,
    // link,
    // date,
    // category,
    // price,
    // supported,
    // tags,
    // introduction,
    // description,
  } = req.body;
  // const images = req.files ? req.files.map((file) => file.filename) : [];
  // const tagsJson = JSON.stringify(tags);
  const mainSql =
    // "INSERT INTO reviwtools ( tool_name, tool_link, tool_date,tool_logo, main_image, tool_category, tool_price, tool_supported, introduction, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    "INSERT INTO reviwtools ( tool_name) VALUES (?)";
  const mainValues = [
    name,
    // link,
    // date,
    // images[0],
    // images[1],
    // category,
    // price,
    // supported,
    // introduction,
    // description,
    description,
  ];
  con.query(mainSql, mainValues, (err, result) => {
    if (err) {
      console.error("Error inserting data into main table:", err);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    } else {
      console.log("Data inserted into main table successfully");
      // const tagsSql = "INSERT INTO tags (tag) VALUES ?";
      // const tagsValues = [tags.map((tag) => tag)];
      // con.query(tagsSql, [tagsValues], (tagsErr, tagsResult) => {
      //   if (tagsErr) {
      //     console.error("Error inserting tags into MySQL:", tagsErr);
      //   } else {
      //     console.log("Tags inserted into MySQL successfully");
      //   }
      // });
      res.status(200).json({ success: true });
    }
  });
});

app.listen(3001, function () {
  console.log("app is listing on 3001 port");
});
