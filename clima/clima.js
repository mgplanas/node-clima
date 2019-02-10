const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=b6c050bbdac16a236d0b85c6633ff20c`);

    return resp.data.main.temp;
};

module.exports = {
    getClima
}