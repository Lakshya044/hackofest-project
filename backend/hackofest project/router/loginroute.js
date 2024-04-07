const express = require('express');
const router = express.Router();
const dotenv = require("dotenv");
const bodyparser = require("body-parser");
dotenv.config();
const admins = require('../model/asAdmin');
const polices = require('../model/aspolice');
const users = require('../model/asuser');
connectTodbs();
// Retry function
const retryPromise = async (fn, retries = 3) => {
  try {
    return await fn();
  } catch (error) {
    if (retries > 0) {
      console.log(`Retrying... (${retries} attempts left)`);
      return await retryPromise(fn, retries - 1);
    } else {
      throw error;
    }
  }
};

// Login route
router.post('/login', async (req, res) => {
  consolr.log("hii")
  const { username, password } = req.body;

  try {
    // Execute all queries in parallel with retry mechanism
    const [admin, police, user] = await Promise.all([
      retryPromise(() => admins.findOne({ username, password })),
      retryPromise(() => polices.findOne({ username, password })),
      retryPromise(() => users.findOne({ username, password }))
    ]);

    // Check results
    if (admin) {
      return res.json({ type: 'admin', user: admin });
    } else if (police) {
      return res.json({ type: 'police', user: police });
    } else if (user) {
      return res.json({ type: 'user', user });
    } else {
      return res.status(401).json({ message: 'Invalid Aadhar number or password' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.get('/login',(req,res) => {
    res.render('Hello');
}); 

module.exports = router;
