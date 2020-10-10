//index.js
let express = require('express')
let app = express();
var port = process.env.PORT || 8080;
// Welcome message
app.get('/', (req, res) => res.send('Welcome to Express'));
// Launch app to the specified port
app.listen(port, function() {
    console.log("Running FirstRest on Port "+ port);
})
//Import routes
let apiRoutes = require("./routes")
//Use API routes in the App
app.use('/api', apiRoutes)
//import body parser
let bodyParser = require('body-parser');
//import mongoose
let mongoose = require('mongoose');
//configure bodyparser to hande the post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


main().catch(console.error);

async function main(){

    const mongoUri = "mongodb+srv://shiguenori:Karoledan4ever.m@uemacluster.8qagy.azure.mongodb.net/<dbname>?retryWrites=true&w=majority";
 
    const client = new MongoClient(mongoUri, { useUnifiedTopology: true });
 
    try {
        mongoose.connect(mongoUri, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false });
 
        // Make the appropriate DB calls
        // await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}