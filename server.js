// // Aca llamamos a los paquetes que necesitamos 
var express    = require('express');        // Usamos express
var app        = express();                 // Definimos que nuestra app usa express
const fetch = require('node-fetch')

var port = process.env.PORT || 8080;        // seteamos el puerto

app.use(express.json())
// Aca se declaran las rutas
app.get('/api/user', (req, res) => {
  res.json({ name: 'Oliver' });
});

// Aca hacemos un fetch de una API - en este caso GitHub 
// Ingrese su usuario en {usuario}
app.get('/api/github', (req, res) => {
fetch('https://api.github.com/users/{usuario}', {
method: 'get'
}).then(response => response.json())
.then(data => {
  res.json(data)
})
});

// Arrancamos el server
// =============================================================================
app.listen(port);
console.log('El server esta funcionando correctamente en el puerto:' + port);