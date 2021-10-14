
const express = require ('express')
const morgan = require ('morgan');
const cors = require ('cors');
const path = require ('path');
const mongoose = require ('mongoose')
const routerAgendas = require('./route/agendas');
const routerCliente = require('./route/Cliente');
const routerprofesional = require('./route/profesional');
const routerservicio = require('./route/servicio');
const {MongoClient} = require('mongodb');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
/* app.use(cors());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method, type, db, access-token");
    res.header("Content-Type", "application/json");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
    next();
}); */


/* const history = require('connect-history-api-fallback')
app.use(history());
app.use(express.static(path.join(__dirname, 'public'))); */

const API_V2 = "/api";

app.get('/', function(req, res) {
    res.send('Hola Mundo!');
  });
app.use(API_V2 + '/agendas', routerAgendas);
app.use(API_V2 + '/Cliente', routerCliente);
app.use(API_V2 + '/profesional', routerprofesional);
app.use(API_V2 + '/servicio', routerservicio);

app.set('port', process.env.PORT || 8080);
app.listen(app.get('port'), function (){
    console.log('example app listening on port'+ app.get('port'));
});

export default app;

//app.use('/clientes', routerAgendas);



