const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use(express.static('public'));

app.use(require('./routes/route'));

app.listen(PORT, () => console.log("Servidor escuchando en el puerto", PORT));