/*IMPORTS*/

const express = require("express");
const cors  = require("cors");
const path = require("path");


/*INITIALIZATION*/
const PORT = process.env.PORT || 3004;
const app = express();

/*INITIALIZATION END */

/*SETTINGS*/

/* SETTINGS END */

process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
});

/* MIDLEWARES */
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();

  app.options("*", (req, res) => {
    res.header(
      "Access-Control-Allow-Methods",
      "GET, PATCH, PUT, POST, DELETE, OPTIONS"
    );
    res.send();
  });
});


app.use(express.static(__dirname + "/public"));
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.urlencoded({extended:false}));
app.use(express.json()); 
app.use(cors());
/* MIDLEWARES END */

/* GLOBAL VARIABLES */
/* GLOBAL VARIABLES END */

/*IMPORTING ROUTES */
/* ROUTES END */

/* ROUTES */

app.use(require("./routes"));

/* ROUTES END */

app.listen(PORT, ()=>console.log(`server running on port ${PORT}`));
