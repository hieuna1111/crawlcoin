const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('crawlcoin', 'root', null, {
  host: 'localhost',
  dialect: 'mysql'
});

require("../models/coin")(sequelize)

let connectDB = async() => {
    try {
        await sequelize.authenticate();
        
    sequelize.sync({ force: false }).then(() => {
        // console.log(`Database & tables created!`);         
    })
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = {connectDB, sequelize}