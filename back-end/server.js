const express = require("express");
const con = require("./db.js");
const cors = require("cors");
const multer = require("multer");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static("imagesupload"));

con.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL server");
});

// ----------use multer for image upload---------------
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "imagesupload/");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname);
    },
  }),
});

// ---------POST api for submitaitools page------------
app.post(
  "/submit",
  upload.fields([
    { name: "websiteLogo", maxCount: 1 },
    { name: "image", maxCount: 1 },
  ]),
  (req, res) => {
    const {
      name,
      link,
      date,
      category,
      price,
      supported,
      tags,
      introduction
    } = req.body;
    const websiteLogo = req.files["websiteLogo"][0].filename;
    const image = req.files["image"][0].filename;
    const description = req.body.description;
    const mainSql =
      "INSERT INTO reviwtools (tool_name,tool_category,tool_link,tool_date,tool_supported,tool_price,tool_logo,main_image,introduction,description,tags) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
      // "INSERT INTO reviwtools (tool_name,tool_logo,description) VALUES (?,?,?)";
    const mainValues = [
      name,
      category,
      link,
      date,
      supported,
      price,
      websiteLogo,
      image,
      introduction,
      description,
      tags
    ];
    console.log("Received data:", {
      name,
      category,
      link,
      date,
      supported,
      price,
      websiteLogo,
      image,
      introduction,
      description,
      tags
    });
    con.query(mainSql, mainValues, (err, result) => {
      if (err) {
        console.error("Error inserting data into main table:", err);
        res
          .status(500)
          .json({ success: false, error: "Internal Server Error" });
      } else {
        console.log("Data inserted into main table successfully");
        res.status(200).json({ success: true });
      }
    });
  }
);

app.listen(3001, function () {
  console.log("app is listing on 3001 port");
});
