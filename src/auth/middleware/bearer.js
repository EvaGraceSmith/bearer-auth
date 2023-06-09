'use strict';

const { user } = require('../models/index.js');


module.exports = async (req, res, next) => {

  try {
// console.log('req.headers.authorization', req.headers.authorization);
    if (!req.headers.authorization) { next('Invalid Login'); }
    console.log('user', user);
    const token = req.headers.authorization.split(' ').pop();
    const validUser = await user.authenticateWithToken(token);

    req.user = validUser;
    req.token = validUser.token;
    next();

  } catch (e) {
    console.error(e);
    res.status(403).send('Invalid Login');
  }
};
