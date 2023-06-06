require('dotenv').config();
const express = require('express');
const cors = require('cors');
const compression = require('compression');
const errorHandler = require('./middleware/errorHandler');
const connectDB = require('./config/connectDB');

const PORT = 8000;
const app = express();

app.use(cors());

app.use(express.json());

app.use(compression());

app.use(express.urlencoded({ extended: false }));

connectDB();

// sending mail => done
// app.post('/reserve-tools', require('./controllers/reserveTools'));
app.use('/szukaj', require('./routes/productsRouter'));

app.use('/wynajem', require('./routes/rentRouter'));

app.use(errorHandler);

app.listen(PORT, () => {
   console.log(`server, rental`);
});

// const productsModel = require('./models/productsModel');
// productsModel.insertMany([
//    {
//       kategoriaProduktu: 'narzedzia ogrodnicze',
//       nazwaProduktu: 'wertykulator22',
//       cena: 3300,
//       kaucja: 1100,
//       ilosc: 10,
//       // dostepneOd: Date,
//       opis: 'wertykulator sluzy do splisniania, naciniania i napowietrzania trawnikow',
//       zdjecia:
//          'https://images.pexels.com/photos/832521/pexels-photo-832521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       daneTechniczne: {
//          glebokosc: '56mm',
//          szerokoscRobocza: '470mm',
//          mocSilnika: '5km',
//          rodzajPaliwa: 'disel',
//          waga: '84kg',
//       },
//    },
//    {
//       kategoriaProduktu: 'akcesoria do betonu',
//       nazwaProduktu: 'zacieraczkaaa',
//       cena: 500,
//       kaucja: 200,
//       ilosc: 20,
//       // dostepneOd: Date,
//       opis: 'zacieraczka przeznaczona jest do wygladzania i zacierania posadzek betonowych',
//       zdjecia:
//          'https://images.pexels.com/photos/2117937/pexels-photo-2117937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       daneTechniczne: {
//          napiecie: '1500v',
//          szerokoscRoboczaTalerza: '600mm',
//          wydajnosc: '75m2/h',
//          waga: '48kg',
//       },
//    },
//    {
//       kategoriaProduktu: 'akcesoria do betonu',
//       nazwaProduktu: 'zacieraczka',
//       cena: 500,
//       kaucja: 200,
//       ilosc: 20,
//       // dostepneOd: Date,
//       opis: 'zacieraczka przeznaczona jest do wygladzania i zacierania posadzek betonowych',
//       zdjecia:
//          'https://images.pexels.com/photos/2117937/pexels-photo-2117937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//       daneTechniczne: {
//          napiecie: '230v',
//          szerokoscRoboczaTalerza: '600mm',
//          wydajnosc: '75m2/h',
//          waga: '39kg',
//       },
//    },
// ]);
