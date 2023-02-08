const express = require('express');
const app = express();
app.use(express.static('public'))
const path = require('path')

app.listen(3015, () => {
    console.log('Servidor corriendo en puerto 3015');
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/home.html'));
});

app.get('/register', (req,res) => {
    res.sendFile(path.join(__dirname + '/views/register.html'));
});

app.get('/login', (req,res) => {
    res.sendFile(path.join(__dirname + '/views/login.html'));
});


