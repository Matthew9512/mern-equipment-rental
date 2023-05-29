const express = require('express');
const cors = require('cors');
const compression = require('compression');

const PORT = 8000;
const app = express();

app.listen(PORT, () => {
   console.log(`server, rental`);
});
