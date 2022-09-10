const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
    res.send("Estamos en la vista Home");
})
app.get('/detail-product', (req, res) =>{
    res.send("Estamos en la vista Detail Product");
})
app.get('/cart', (req, res) =>{
    res.send("Estamos en la vista Cart");
})
app.get('/log-in', (req, res) =>{
    res.send("Estamos en la vista Log In");
})
app.get('/register', (req, res) =>{
    res.send("Estamos en la vista Register");
})

app.listen(PORT, () => console.log("Servidor escuchando en el puerto", PORT));