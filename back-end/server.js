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

// ----------use multer for image upload-----------for reviwtools table----
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

// -------------------------------------POST api for submitaitools page----------------in reviwtools table-----------
app.post(
  "/submit",
  upload.fields([
    { name: "websiteLogo", maxCount: 1 },
    { name: "image", maxCount: 1 },
  ]),
  (req, res) => {
    const { name, link, date, category, price, supported, tags, introduction } =
      req.body;
    const websiteLogo = req.files["websiteLogo"][0].filename;
    const image = req.files["image"][0].filename;
    const description = req.body.description;
    const mainSql =
      "INSERT INTO reviwtools (tool_name,tool_category,tool_link,tool_date,tool_supported,tool_price,tool_logo,main_image,introduction,description,tags) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
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
      tags,
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
      tags,
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

// ------------------fetch api for reviwtools page --------------from reviwtools table------------------

app.get("/fetchreviwtools", (req, res) => {
  const sql = "SELECT * FROM reviwtools";
  con.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching uploaded data:", err);
      res.status(500).send("Error fetching data from the database");
    } else {
      console.log("Fetched data:", results);
      res.json(results);
    }
  });
});
// ------------------fetch api for home page --------------from finaltools table------------------

app.get("/fetchfinaltools", (req, res) => {
  const sql = "SELECT * FROM finaltools";
  con.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching uploaded data:", err);
      res.status(500).send("Error fetching data from the database");
    } else {
      console.log("Fetched data:", results);
      res.json(results);
    }
  });
});

// ------------------DELETE api to remove data from reviwtools table------------------
app.delete("/reviewtools/:id", (req, res) => {
  const { id } = req.params;

  const sql = `DELETE FROM reviwtools WHERE reviw_id = ?`;

  con.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Error deleting data from reviwtools table:", err);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    } else {
      console.log(
        `Data with ID ${id} deleted from reviwtools table successfully`
      );
      res.status(200).json({ success: true });
    }
  });
  });

  // ------------------fetch api for home page --------------from finaltools table------------------

app.get("/fetchsavetools", (req, res) => {
  const sql = "SELECT * FROM savetools";
  con.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching uploaded data:", err);
      res.status(500).send("Error fetching data from the database");
    } else {
      console.log("Fetched data:", results);
      res.json(results);
    }
  });
});


// ------------------update api for bookmark_count------- in finaltools table------------------
app.put("/bookmark_count_to_finaltools/:id", (req, res) => {
  const { id } = req.params;
  const sql = 'UPDATE finaltools SET bookmark_count = IFNULL(bookmark_count, 0) + 1 WHERE final_id = ?';

  con.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Error updating data in finaltools table:", err);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    } else {
      console.log(`Data with final ID ${id} updated in finaltools table successfully`);
      res.status(200).json({ success: true });
    }
  });
});
// ------------------DELETE api to remove data from savetools table------------------
app.delete("/savetools/:id", (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM savetools WHERE save_id = ?`;

  con.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Error deleting data from savetools table:", err);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    } else {
        console.log(`Data with ID ${id} deleted from savetools table successfully`);
        res.status(200).json({ success: true });
      }
  });
});

// -------------------------------------POST api to move data to finaltools table--------from reviwtools---
app.post("/finaltools", (req, res) => {
  const {
    reviw_id,
    tool_name,
    tool_category,
    tool_link,
    tool_date,
    tool_supported,
    tool_price,
    tool_logo,
    main_image,
    introduction,
    description,
    tags,
  } = req.body;

  const sql = `INSERT INTO finaltools (final_id, tool_name, tool_category, tool_link, tool_date, tool_supported, tool_price, tool_logo, main_image, introduction, description, tags) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  const values = [
    reviw_id,
    tool_name,
    tool_category,
    tool_link,
    tool_date,
    tool_supported,
    tool_price,
    tool_logo,
    main_image,
    introduction,
    description,
    tags,
  ];

  con.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error inserting data into finaltools table:", err);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    } else {
      console.log("Data inserted into finaltools table successfully");
      res.status(200).json({ success: true });
    }
  });
});
// -------------------------------------POST api to move data to savetools table--------from finaltools---
app.post("/savetools", (req, res) => {
  const {
    final_id,
    tool_name,
    tool_category,
    tool_link,
    tool_date,
    tool_supported,
    tool_price,
    tool_logo,
    main_image,
    introduction,
    description,
    tags,
  } = req.body;

  const sql = `INSERT INTO savetools (save_id, tool_name, tool_category, tool_link, tool_date, tool_supported, tool_price, tool_logo, main_image, introduction, description, tags) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  const values = [
    final_id,
    tool_name,
    tool_category,
    tool_link,
    tool_date,
    tool_supported,
    tool_price,
    tool_logo,
    main_image,
    introduction,
    description,
    tags,
  ];

  con.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error inserting data into savetools table:", err);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    } else {
      console.log("Data inserted into finaltools table successfully");
      res.status(200).json({ success: true });
    }
  });
});

// -------end---------------
app.listen(3001, function () {
  console.log("app is listing on 3001 port");
});
