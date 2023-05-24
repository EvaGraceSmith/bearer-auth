'use strict';

require('dotenv').config();
const PORT = process.env.PORT || 3003;
// const { sequelize } = require('./src/auth/models');
// const { start } = require('./src/server');

// sequelize.sync()
//   .then(() => {
//     console.log('Successful DB connection');
//     start(PORT);
//   })
//   .catch((err) => {
//     console.error('could not start server', err);
//   });




// // Start up DB Server
const { db } = require('./src/auth/models/index.js');
db.sync()
  .then(() => {

    // Start the web server
    require('./src/server.js').start(process.env.PORT);
  });
