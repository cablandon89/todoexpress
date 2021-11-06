const app = require('./app');
require('dotenv').config(); // cargar las variables de entorno

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Servidor escuchando sobre el puerto ${PORT}`);
});
