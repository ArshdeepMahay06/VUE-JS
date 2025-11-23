import express from "express";
import { MongoClient } from "mongodb";

import cors from "cors";


const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
// Your MongoDB URL
// const uri = "mongodb+srv://lesson06:lesson06@cluster0.xrxgnbf.mongodb.net/?appName=Cluster0";
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

async function main() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("test");          // your database name
    const collection = db.collection("quotes"); // your collection name

    // Route to fetch ALL documents
    app.get("/", async (req, res) => {
      try {
        const data = await collection.find({}).toArray();
        res.json(data);  // send all JSON documents
      } catch (e) {
        res.status(500).send("Error fetching data");
      }
    });

    app.listen(port, () => {
      console.log("Server running on http://localhost:" + port);
    });

  } catch (e) {
    console.error(e);
  }
}

main();
