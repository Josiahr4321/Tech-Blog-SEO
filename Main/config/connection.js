const { Sequelize } = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.DATABASE_URL) {
  // Use Heroku Postgres URL
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  });
} else {
  // Use your local database URL
  sequelize = new Sequelize('techblog_db' ,'root', 'root', {
    host: 'localhost',
    dialect: 'mysql', // Change this to the appropriate database type (e.g., 'postgres')
    port: 3306, // Change this to the appropriate port
  });
}

module.exports = sequelize;

