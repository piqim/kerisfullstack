import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";

// Load environment variables from config.env
dotenv.config();

const URL = "mongodb+srv://admin:ajakajakpiqim2023@keriscluster.rgslz.mongodb.net/?retryWrites=true&w=majority&appName=KerisCluster";
const client = new MongoClient(URL, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {
  // Connect the client to the server
  await client.connect();
  // Send a ping to confirm a successful connection
  await client.db("admin").command({ ping: 1 });
  console.log("Pinged your deployment. You successfully connected to MongoDB!");
} catch (err) {
  console.error(err);
}

let db = client.db("kerisdb");

export default db;
