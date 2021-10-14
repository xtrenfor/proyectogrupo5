import mongoose from "mongoose";
// Connect to MongoDB
const mongoUrl = "mongodb+srv://gelorenita:Equipo5@cluster-easyagenda.1lpci.mongodb.net/dbEasyagenda?retryWrites=true&w=majority"; 



  try{
    mongoose.connect(mongoUrl,{
        useNewUrlParser: true,
        useUnifiedTopology: true
      });

    mongoose.connection.on("error", function(err) {
        console.log("err", err);
    });
    mongoose.connection.on("connected", function(err, res) {
        console.log("mongoose is connected on " + mongoUrl);
    });
  }catch(err){
    console.log(err);
  }

export default mongoose;