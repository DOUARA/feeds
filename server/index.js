const express = require("express");
const app = express();
const port = 5000;

const fs = require("fs");

let rawdata = fs.readFileSync("feed.json");
let feeds = JSON.parse(rawdata);

app.get("/api", (req, res) => {
  try {
    let page = req.query.page || "1";
    let perPage = req.query.per_page || "5";

    if (isNaN(page) || isNaN(perPage)) {
      return res.sendStatus(400);
    }

    let data = [];
    page = parseInt(page);
    perPage = parseInt(perPage);

    data = feeds.data.slice(
      (page - 1) * perPage,
      (page - 1) * perPage + perPage
    );
    
    return res.json({
      data,
      page,
      total_pages: Math.ceil(feeds.data.length / perPage),
    });
  } catch (error) {
    console.error(error);
    res.json({ data: "something went wrong" });
  }
});

app.listen(port, () => {
  console.log(`App Listening at http://localhost:${port}`);
});
