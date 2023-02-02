const express = require('express');
const app = express();
const path = require('path');
const port = 3030;
const htmlHome = path.join(__dirname, './views/index.html')
const htmlBabbage = path.join(__dirname, './views/babbage.html')
const htmlBerners = path.join(__dirname, './views/berners-lee.html.html')
const htmlClarke = path.join(__dirname, './views/clarke.htmlhtml')
const htmlHamilton = path.join(__dirname, './views/hamilton.html.html')
const htmlHopper = path.join(__dirname, './views/hopper.html')
const htmlLovelace = path.join(__dirname, './views/lovelace.html')
const htmlTuring = path.join(__dirname, './views/turing.html')


app.get('/', (req, res) =>{
    res.sendFile(htmlHome);
});
app.get('/babbage', (req, res) =>{
    res.sendFile(htmlBabbage);
});
app.get('/berners-lee', (req, res) =>{
    res.sendFile(htmlBerners);
});
app.get('/clarke', (req, res) =>{
    res.sendFile(htmlClarke);
});
app.get('/hamilton', (req, res) =>{
    res.sendFile(htmlHamilton);
});
app.get('/hopper', (req, res) =>{
    res.sendFile(htmlHopper);
});app.get('/lovelace', (req, res) =>{
    res.sendFile(htmlLovelace);
});app.get('/turing', (req, res) =>{
    res.sendFile(htmlTuring);
});

app.listen(port, () => 
    console.log(`Servidor corriendo en puerto ${port}`)
    );


