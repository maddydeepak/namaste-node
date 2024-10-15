const fs = require("fs");
const https = require("https");

console.log("This is the first line...");

const a = 10;
const b = 20;

https.get("https://dummyjson.com/products/1", (res) => {
  console.log("API called successfully");
});

setTimeout(() => {
  console.log("Set Timeout called after 5 seconds");
}, 5000);

fs.readFile("file.txt", "utf8", (err, data) => {
  console.log(data);
});

function calculateSum(a, b) {
  return a + b;
}

const c = calculateSum(a, b);

console.log(c);
