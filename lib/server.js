
express = require("express");
config = require("./config");

var app = express();

app.use(express.static("public"));
app.set('view engine','ejs');

app.get('/', (req,res)=> {
	res.render('index',{answer:43});
});
app.listen(config.port, function listenHandler() {
	console.log(`Hello Running on ${config.port} ...` );
});