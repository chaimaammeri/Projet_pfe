// import express from 'express' 
// import bodyParser from 'body-parser';
// import cors from 'cors';


const app = express()
app.use(express.json())
app.use(cors())
app.use(bodyParser.json())


app.use("/backend/Routes/adminM.js")


 app.listen(8800, () => {
  console.log('Connected to backend localhost:8800');
});


// le message affiché dans la page principale 
  app.get("/", (req, res)=>{
  res.json("hello this is my first backend")
});

//  get c.à.d : give me the code from the backend 
// c un selection de tout le table desk et qui retourne ce table dans la page \desk


app.get("/desk", (req, res)=>{
  const q ="SELECT * FROM desk"
  db.query(q,(err,data)=>{
    if(err) return res.json(err)
    return res.json(data)
  });
});

// post c.à.d : ajouter ou envoyer un code to the backend
// c une inserstion d'un nouveaux champ au table desk dans la page '\desk'
// je peux tester ca avec postman et pour voir ce table je fais un get

app.post("/desk", (req, res)=>{
  const q ="INSERT INTO desk (`ID_Desk`,`Marque`,`Modèle`,`Annèe_fabrication`) VALUES (?)"
  const values =["2015","renault","gffff","1987"];

  db.query(q,[values],(err,data)=>{
    if(err) return res.json(err)
    return res.json("desk has been created successfully")
  });
});


// app.post("/desk", (req, res)=>{
//   const q ="INSERT INTO desk (`ID_Desk`,`Marque`,`Modèle`,`Annèe_fabrication`) VALUES (?)"
//   const values =[
//       req.body.ID_Desk,
//       req.body.Marque,
//       req.body.Modèle,
//       req.body.Annèe_fabrication,
//   ];

//   db.query(q,[values],(err,data)=>{
//     if(err) return res.json(err)
//     return res.json("desk has been created successfully")
//   });
// });

