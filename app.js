const { argv } = require('./config/yargs');
require('colors');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

console.log('Buscando Clima'.black);

let getInfo = async (direccion) => 
{
    try
    {
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);
        return `El clima en ${ direccion } es de ${ temp } `;
    } catch(e)
    {
        return `No se pudo determinar el clima en ${ direccion }`
    }
}
getInfo(argv.direccion).then((resp) =>
{
    console.log(resp.green);
})
.catch((err) => 
{
    console.log(err);
});