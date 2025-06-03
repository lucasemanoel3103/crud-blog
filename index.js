const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");


//View engine
app.set('view engine', 'ejs');

//static
app.use(express.static('public'));

//Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//database
connection
    .authenticate()
    .then(() => {
        console.log("Conexão com o banco de dados feita com sucesso");
    }).catch((error) => {
        console.log(error);
    })

app.get("/", (req, res) => {
    res.render("index")
});


app.listen(3000, () =>{
    console.log("Servidor rodando na porta 3000!");
});