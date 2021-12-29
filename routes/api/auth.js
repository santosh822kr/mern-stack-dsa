const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');

const User = require('../../models/User');

//Authenticate user
router.post('/', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: 'Kindly fill all the details' });
  }

  //Check user
  User.findOne({ email }).then((user) => {
    if (!user) {
      return res.status(400).json({ msg: 'The user doesnot exists' });
    }

    //Password validation
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) return res.status(400).json({ msg: 'invalid credentials' });

      jwt.sign(
        { id: user.id },
        process.env.jwtSecret,
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;

          res.json({
            token,
            user: {
              id: user.id,
              name: user.name,
              email: user.email,
            },
          });
        }
      );
    });
  });
});

//Get user data
router.get('/user', auth, (req, res) => {
  User.findById(req.user.id)
    .select('-password')
    .then((user) => res.json(user));
});

// //Register new user
// router.post('/register', async (req, res) => {
//   const { name, email, password } = req.body;

//   // Simple validation
//   if (!name || !email || !password) {
//     return res.status(400).json({ msg: 'Please enter all fields' });
//   }

//   try {
//     const user = await User.findOne({ email });
//     if (user) throw Error('User already exists');

//     const salt = await bcrypt.genSalt(10);
//     if (!salt) throw Error('Something went wrong with bcrypt');

//     const hash = await bcrypt.hash(password, salt);
//     if (!hash) throw Error('Something went wrong hashing the password');

//     const newUser = new User({
//       name,
//       email,
//       password: hash,
//     });

//     const savedUser = await newUser.save();
//     if (!savedUser) throw Error('Something went wrong saving the user');

//     const token = jwt.sign({ id: savedUser._id }, process.env.jwtSecret, {
//       expiresIn: 3600,
//     });

//     res.status(200).json({
//       token,
//       user: {
//         id: savedUser.id,
//         name: savedUser.name,
//         email: savedUser.email,
//       },
//     });
//   } catch (e) {
//     res.status(400).json({ error: e.message });
//   }
// });

module.exports = router;
