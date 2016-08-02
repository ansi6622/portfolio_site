require('dotenv').load();

module.exports = {

  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    }
  }

};
