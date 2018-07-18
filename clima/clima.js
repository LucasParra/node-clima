const axios = require('axios');

const getClima = async (lat, lng) => 
{
    let APIKEY = 'f369635965b00ad16ced5da4da4b9f3b';

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=${ APIKEY }`);
    return resp.data.main.temp;
}
module.exports = 
{
    getClima
}