// NOTES

// Go to mongodb website
// Create a free M0 cluster
// Create a user
// Get the connection string
// Install Mongo DB compass
// Create a database
// INstall mongodb package
// Create a connection from code
// Documents CRUD - CReate, REad, Update, Delete

// Mongodb user - deepakmongodb
// Mongodb pwd  - CMCLT7q2J59EYvX5

const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://deepakmongodb:CMCLT7q2J59EYvX5@deepakmongodb.txrsa.mongodb.net/";

const client = new MongoClient(url);

const dbName = "HelloworldDB";

async function main() {
  await client.connect();
  console.log("conncted");
  const db = client.db(dbName);
  const collection = db.collection("User");

  const data = {
    firstname: "Niveditha",
    lastname: "U",
    city: "Bengaluru",
  };

  //   const insertResult = await collection.insertMany([data]);
  //   console.log("Inserted documents =>", insertResult);

  //   const findResult = await collection.find({}).toArray();
  //   console.log("Found documents =>", findResult);

  const findFilterResult = await collection
    .find({ firstname: "Niveditha" })
    .toArray();
  console.log(
    "Found documents with first name Niveditha => ",
    findFilterResult
  );

  return "done";
}

main()
  .then(console.log)
  .catch((error) => console.log(error))
  .finally(() => client.close());
