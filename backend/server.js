require('dotenv').config();
const express = require('express');
const cors = require('cors');
const compression = require('compression');
const errorHandler = require('./middleware/errorHandler');

const PORT = 8000;
const app = express();

app.use(cors());

app.use(express.json());

app.use(compression());

app.use(express.urlencoded({ extended: false }));

// sending mail => done
app.post('/reserve-tools', require('./controllers/reserveTools'));

app.use(errorHandler);

app.listen(PORT, () => {
   console.log(`server, rental`);
});
