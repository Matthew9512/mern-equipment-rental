require('dotenv').config();
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const compression = require('compression');
const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const connectDB = require('./config/connectDB');

const PORT = 8000;
const app = express();

app.use(cors());

// app.use(cors(corsOptions))

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
//       kategoriaProduktu: 'narzedzia ogrodnicze',
//       nazwaProduktu: 'glebogryzarka CEDRUS GL03 PRO-LC',
//       cena: 500,
//       kaucja: 200,
//       ilosc: 1,
//       opis: 'Glebogryzarka CEDRUS GL03PRO-LC to wszechstronna i uniwersalna glebogryzarka z niezależnym napędem na koła. Przeznaczona do pracy w ogrodach, tunelach foliowych, szklarniach oraz gospodarstwach rolniczych uprawiających rośliny rzędowo. Noże obracają się w obie strony. Obroty do przodu służą do spulchniania wierzchniej warstwy gleby, obroty do tyłu ułatwiają głębokie spulchnianie.',
//       zdjecia:
//          'https://images.pexels.com/photos/2117937/pexels-photo-2117937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       daneTechniczne: {
//          'moc znamionowa': '6,5 km',
//          paliwo: 'benzyna bezołowiowa 95 Pb',
//          'bieg przód/tył': '1/1',
//          'max głębokość robocza': '170 mm',
//          'szerokość robocza': '45 cm',
//          wysokość: '1,1m',
//          długość: '1,8m',
//          ciężar: '92 kg',
//       },
//    },
// ]);
