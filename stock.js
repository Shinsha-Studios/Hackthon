const axios = require("axios");
const express = require("express");
const cheerio = require("cheerio");
const app = express();

const URL = "https://finance.yahoo.com/quote/%5EGSPC/options?p=%5EGSPC";

const results = [];

async function scrapeData() {
  try {
    const res = await axios.get(URL);
    const $ = cheerio.load(res.data);
    $(
      "#quote-header-info > div.My\\(6px\\).Pos\\(r\\).smartphone_Mt\\(6px\\).W\\(100\\%\\) > div.D\\(ib\\).Va\\(m\\).Maw\\(65\\%\\).Ov\\(h\\) > div > fin-streamer.Fw\\(b\\).Fz\\(36px\\).Mb\\(-4px\\).D\\(ib\\)"
    ).each((i, e) => {
      //console.log(e);
      results.push($(e).text());
    });

    console.log(results);
  } catch (error) {
    console.log("ERRORRR");
    console.log(error);
  }
}

scrapeData();

app.listen(3000, () => {
  console.log("LISTENING ON PORT 3000");
});
