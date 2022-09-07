const http = require("http");

const server = http.createServer((peticion, respuesta) => {
    respuesta.end("Ahora si me funcional");
});

const connectedServer = server.listen(8080, () => {
    console.log(`Servidor http escuchando en el puerto ${connectedServer.address().port}`)
})