const express = require('express');
const router = express.Router();
const databaseModule = require('./mongodbconnector');

router.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    const db = await databaseModule.connect();
    console.log("this.connect");
    const usersCollection = db.collection('users');
    console.log("this.usersCollection");
    const user = await usersCollection.findOne({ email, password });

    if (!user) {
      res.status(401).json({ error: 'Invalid email or password' });
    } else {
      res.json({ message: 'User signed in successfully' });
    }
  } catch (err) {
    console.error('Error retrieving user from the database:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
