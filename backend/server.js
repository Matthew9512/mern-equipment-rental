require('dotenv').config();
const cors = require('cors');
const compression = require('compression');
const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const connectDB = require('./config/connectDB');

/**
 * @todo cors optios
 */

const PORT = 8000;
const app = express();

app.use(cors());

app.use(express.json());

app.use(compression());

app.use(express.urlencoded({ extended: false }));

connectDB();

app.use('/szukaj', require('./routes/productsRouter'));

app.use('/wynajem', require('./routes/rentRouter'));

app.use(errorHandler);

app.listen(PORT, () => {
   console.log(`server, rental`);
});

// =================================
// const productsModel = require('./models/productsModel');
// productsModel.insertMany([
//    {
//       kategoriaProduktu: 'zageszczarki',
//       nazwaProduktu: 'zagęszczarka rewersyjna 143 KG WEBER CR 2 HD',
//       cena: 500,
//       kaucja: 200,
//       ilosc: 1,
//       // dostepneOd: Date,
//       opis: 'Zagęszczarka rewersyjna Weber CR 2 Hd sprawdzi się przy zagęszczaniu piasku, żwiru, asfaltu czy kostki brukowej.',
//       zdjecia:
//          'https://images.pexels.com/photos/2117937/pexels-photo-2117937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       daneTechniczne: {
//          'typ silnika': 'spalinowy (benzyna)',
//          'producent i model silnika': 'Honda GX 160',
//          paliwo: 'benzyna',
//          moc: '3,6 kW / 4,9 KM',
//          częstotliwość: '100 Hz',
//          'siła odśrodkowa': '25 kN',
//          rozwuch: 'ręczny',
//          'szerokość robocza': '45 cm',
//          ciężar: '143 kg',
//       },
//    },
// ]);
