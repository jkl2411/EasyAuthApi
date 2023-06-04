const express = require('express');
const router = express.Router();
const databaseModule = require('./mongodbconnector');

router.post('/signup', async (req, res) => {
  const { first_name, last_name, email, password } = req.body;

  console.log(first_name)
  try {
    const db = await databaseModule.connect();
    console.log("this.connect");
    const usersCollection = db.collection('users');
    console.log(usersCollection)
    const result = await usersCollection.insertOne({ first_name, last_name, email, password });
    console.log(result)

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Error inserting user into the database:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
