
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

const articleRoute = require("./route/article");

app.use("/image", express.static(path.join(__dirname, "image")));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
}); 

app.use("/api/article", articleRoute);
app.post("/api/contact", (req,res) => {
  console.log("test 1 2 test");
  res.status(200).json({confirmID:"d:p je suis une message de confirmation!!!!!!!!!!!!!!!!", ...req.body});
});
app.post('/api/addContact', (req,res)=>{
  const o = req.body
  // console.log(o);
  if(o.datas && o.datas.noms && o.datas.email && o.datas.age && o.datas.message)
      res.status(200).json({confirmID: "!_JE_SUIS_UN_NUMÉRO_DE_CODE_!"});
  else res.status(400).json({message: "l'objet envoyé ne correspond pas à ce que attend le serveur"});
})

module.exports = app;