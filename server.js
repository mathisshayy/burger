const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.engine('handlebars', exphbs({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');

app.use(express.static('public/assets/img'));


const routes = require("./controllers/burgers_controller.js");

app.use('/', routes);


app.listen(PORT,() =>{

  console.log(`Server listening on ${PORT}`);
});
