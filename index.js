const express = require("express");
const { dirname } = require("path");
const servidor = express();
const path = require("path");

servidor.get("/", (requisicao, resposta) => {
    resposta.send("bacana");
}
)
servidor.get("/calculadora", (requisicao, resposta) => {
    resposta.sendFile(path.join(__dirname , "index.html"));
}
)

var porta = 3000
servidor.listen(porta,()=>{
    console.log(`Ta funcionando na porta ${porta}` );
})
