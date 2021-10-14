var express = require('express');
var bodyParser = require('body-parser');

const {MongoClient} = require('mongodb');

var app = express();
var port = process.env.PORT || 3525;

// Convierte una petición recibida (POST-GET...) a objeto JSON
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', function(req, res){
	res.status(200).send({
		message: 'GET Home route working fine!'
	});
});

app.listen(port, function(){
	console.log(`Server running in http://localhost:${port}`);
	console.log('Defined routes:');
	console.log('	[GET] http://localhost:3525/');
});

async function main(){

    const uri = "mongodb+srv://gelorenita:Equipo5@cluster-easyagenda.1lpci.mongodb.net/dbEasyagenda?retryWrites=true&w=majority"; 

    const client = new MongoClient(uri, { useUnifiedTopology: true}, { useNewUrlParser: true });
 
    try {

        MongoClient.connect(uri, function(err, db) {
            if (err) throw err;
            var dbo = db.db("dbEasyagenda");
            dbo.collection("Cliente").find({}).toArray(function(err, result) {
                if (err) throw err;
                console.log(result);
                db.close();
              });
            });
    } catch (e) {
        console.log("entra a catch")
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);