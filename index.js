const express = require('express');
const app = express();
const PORT = 3000;

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

app.listen(PORT, () => console.log(`Servidor escuchando en http://localhost:${PORT}`));
