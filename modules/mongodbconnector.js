const { MongoClient } = require('mongodb');

// Database connection URL
const url = 'mongodb://localhost:27017';
const dbName = 'auth_system_db';


async function connect() {
  try {
    const client = await MongoClient.connect(url, { useUnifiedTopology: true });
    const db = client.db(dbName);
    return db;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

module.exports = {
  connect,
};
