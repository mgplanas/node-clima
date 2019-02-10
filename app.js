const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección para obterner el clima',
        demand: true
    }
}).argv;

console.log(argv);

const getInfo = async(direccion) => {
    let coords = await lugar.getLugarLatLng(direccion);
    let temp = await clima.getClima(coords.lat, coords.lng);

    return `El clima para '${coords.direccion} en de ${temp} C`;
}


getInfo(argv.direccion)
    .then(resp => console.log(resp))
    .catch(e => console.log(e));

// lugar.getLugarLatLng(argv.direccion)
//     .then(coords => console.log(coords))
//     .catch(e => console.log(e));
// clima.getClima(9.9286, -84.09072)
//     .then(temp => console.log(temp))
//     .catch(e => console.log(e));