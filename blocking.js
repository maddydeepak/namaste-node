const crypto = require("node:crypto");

const a = 5;
const b = 10;

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("Generated key is : ", key);
});

function sum(a, b) {
  console.log(a + b);
}

sum(a, b);
