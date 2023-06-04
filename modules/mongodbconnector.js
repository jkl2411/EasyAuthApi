const { MongoClient } = require('mongodb');

// Database connection URL
const url = 'mongodb+srv://jayantkumar2411:AbODXl5hIcIz9iuD@authapi.wf8fzby.mongodb.net/?retryWrites=true&w=majority';
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
