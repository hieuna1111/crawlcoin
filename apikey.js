const rp = require('request-promise')
var {sequelize} = require("./context/dbContext")
const requestOptions = {
  method: 'GET',
  uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
  qs: {
    'start': '1',
    'limit': '5000',
    'convert': 'USD'
  },
  headers: {
    'X-CMC_PRO_API_KEY': '4e45aa4f-6f99-492d-9e71-7f0965782a0e'
  },
  json: true,
  gzip: true
};

function saveDataIntoMysql(req) {
  req.forEach(element => {
    sequelize.models.coins.create({
        name: element.name,
        symbol: element.symbol,
        slug: element.slug,
        num_market_pairs: element.num_market_pairs,
        date_added: element.date_added,
        tags: JSON.stringify(element.tags),
        max_supply: element.max_supply,
        circulating_supply: element.circulating_supply,
        total_supply: element.total_supply,
        platform: element.platform,
        cmc_rank: element.cmc_rank,
        last_updated: element.last_updated,
        quote: JSON.stringify(element.quote)
  }).then(notes => console.log(notes))
  });
}

rp(requestOptions).then(response => {
    console.log('API call response:', response);
    saveDataIntoMysql(response.data)
  }).catch((err) => {
    console.log('API call error:', err.message);
  });