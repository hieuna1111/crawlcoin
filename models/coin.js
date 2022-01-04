const { Sequelize } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('coins', { name: Sequelize.STRING, 
                                symbol: Sequelize.STRING,
                                slug: Sequelize.STRING, 
                                num_market_pairs: Sequelize.INTEGER,
                                date_added: Sequelize.DATE, 
                                tags: Sequelize.TEXT,
                                max_supply: Sequelize.BIGINT, 
                                circulating_supply: Sequelize.DOUBLE, 
                                total_supply: Sequelize.DOUBLE,
                                platform: Sequelize.TEXT, 
                                cmc_rank: Sequelize.INTEGER,
                                last_updated: Sequelize.DATE,
                                quote: Sequelize.TEXT});
}