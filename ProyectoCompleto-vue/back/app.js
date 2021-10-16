require("dotenv").config()

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");

const auth = require('./routes/auth')

const port = process.env.PORT;

const app = express();
app.use(cors()); // Cualquier Origen
app.use(logger('dev'))
app.use(express.json());
app.use(express.urlencoded({extended: 'false'}));
app.use(express.static(path.join(__dirname, 'dist')))
app.use('/api/auth', auth)
app.use('/api', require('./routes/routes'));

if (process.env.NODE_ENV === 'production'){
  app.use(express.static(__dirname + '/site/'))
  app.use('*', (req, res) => {
    res.sendFile(__dirname + '/site/index.html')
  })
}

app.use(function (req, res, next){
  const err = new Error ('No Disponible!')
  err.status = 404
  next (err)
})

app.use(function (err, req, res, next){
  console.error(err);
  if (req.app.get('env') !== 'development'){
    delete err.stack
  }
  res.status(err.statusCode || 500).json(err)
})

module.exports = app

mongoose.connect(process.env.URI_DB)
  .then(() => console.log("Se ha establecido la conexión con la base de datos!"))
  .catch(err => console.error(err));

app.listen(port, () => {
  console.log(`Servidor escuchando a traves de http://127.0.0.1:${port}`);
})