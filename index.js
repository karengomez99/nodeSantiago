const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const request = require("request");

var cors =require('cors')
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/home', function (req, res) {
    res.send('Mi app con expressjs');
});

app.get('/getUsers', function (req, res) {
    request.get("https://reqres.in/api/users?page=2", (error, response, body) => {
        res.json(JSON.parse(body));
    });
});

app.get('/getSingleUser', function (req, res) {
    const id = req.query.id;
    request.get(`https://reqres.in/api/users/${id}`, (error, response, body) => {
        res.json(JSON.parse(body));
    });
});

app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});