import mongoose from "mongoose";

const connection = {
  isConnected: false, // Initialize isConnected as a boolean value
};

async function connect() {
  if (connection.isConnected) {
    console.log("Already connected");
    return;
  }

  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState === 1;
    if (connection.isConnected) {
      console.log("Use previous connection");
      return;
    }
    await mongoose.disconnect();
  }

  const db = await mongoose.connect(process.env.MONGODB_URI);
  console.log("New connection", process.env.MONGODB_URI);
  connection.isConnected = db.connections[0].readyState === 1;
}

async function disconnect() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === "production") {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log("Not disconnected");
    }
  }
}

function convertDocToObj(doc) {
  doc._id = doc._id.toString();
  doc.createdAt = doc.createdAt.toString();
  doc.updatedAt = doc.updatedAt.toString();
  return doc;
}

const db = { connect, disconnect, convertDocToObj };
export default db;
