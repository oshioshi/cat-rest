const twitter = require("twitter");
const fs = require("fs");

const client = new twitter(JSON.parse(fs.readFileSync("./secret.json","utf-8")));

const obj = JSON.parse(fs.readFileSync("timeline.json","utf-8"));
 for(let i=0;i<20;i++){
   console.log(obj[i].text + "\n");
 }