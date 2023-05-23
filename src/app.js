const express = require("express");
const app = express();

app.get("/", async(req, res) => {
    res.send("pagina inicial")
});

app.listen(8080,() => {
    console.log("servidor iniciado em 8080")
});

//para inicializar digite no terminal node app.js