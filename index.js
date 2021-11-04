const express = require('express');
const morgan = require("morgan");

const app = express();

const PORT = 8000;


app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.use(morgan("dev"));

app.get('/', (request, response) => {
  console.log(request);
  response.send("Hola mundo!");
}); //Atiende peticiones a través del método get

app.get('/tasks', (request, response) => {
  response.json([{
    a: 1,
    b: 2
  }]);
})

app.post('/tasks', (request, response) => {
  console.log(request.body);
  response.sendStatus(200);
});

app.put('/tasks/:id', (request, response) => {
  console.log(request.params);
});

app.listen(PORT, () => {
  console.log('servidor escuchando');
})