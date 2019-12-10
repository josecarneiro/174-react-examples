const { Router } = require('express');
const router = new Router();

const User = require('./../../models/user');
const bcryptjs = require('bcryptjs');

router.post('/sign-up', async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    const hash = await bcryptjs.hash(password, 10);
    const user = await User.create({
      name,
      email,
      passwordHash: hash
    });
    req.session.user = user._id;
    res.json({ user });
  } catch (error) {
    next(error);
  }
});

/*
router.post('/sign-up', (req, res, next) => {
  const { name, email, password } = req.body;
  bcryptjs
    .hash(password, 10)
    .then(hash => {
      return User.create({
        name,
        email,
        passwordHash: hash
      });
    })
    .then(user => {
      req.session.user = user._id;
      res.json({ user });
    })
    .catch(error => {
      next(error);
    });
});
*/

router.post('/sign-in', async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email }).exec();
    if (!user) throw new Error("There's no user with that email.");
    const result = await bcryptjs.compare(password, user.passwordHash);
    if (!result) throw new Error('Wrong password.');
    req.session.user = user._id;
    res.json({ user });
  } catch (error) {
    next(error);
  }
});

/*
router.post('/sign-in', (req, res, next) => {
  let userId;
  const { email, password } = req.body;
  User.findOne({ email })
    .then(user => {
      if (!user) {
        return Promise.reject(new Error("There's no user with that email."));
      } else {
        userId = user._id;
        return bcryptjs.compare(password, user.passwordHash);
      }
    })
    .then(result => {
      if (result) {
        req.session.user = userId;
        res.json({ user });
      } else {
        return Promise.reject(new Error('Wrong password.'));
      }
    })
    .catch(error => {
      next(error);
    });
});
*/

router.post('/sign-out', (req, res, next) => {
  req.session.destroy();
  // res.redirect('/');
  res.json({});
});

const routeGuard = require('./../../middleware/route-guard');

router.get('/user-information', routeGuard, async (req, res, next) => {
  const userId = req.session.user;
  if (!userId) {
    res.json({});
  } else {
    try {
      const user = await User.findById(userId);
      if (!user) throw new Error('Signed in user not found');
      res.json({ user });
    } catch (error) {
      next(error);
    }
  }
});

module.exports = router;
