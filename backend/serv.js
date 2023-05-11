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

// --------------------------------------------------------------------------------

// import express from 'express' 
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import cookieParser from 'cookie-parser';
// import db from './db.js';
// import authRoutes from './Routes/Auth.js'
// import adminprofilRoutes from './Routes/AdminProfil.js';
// import userRoutes from './Routes/UserM.js'   // adminRoutes est le nom que j'ai donnée au page admin manage dans la page server.js  
// import agentlistRoutes from './Routes/AgentL.js'
// import agentRoutes from './Routes/AgentM.js'
// import userlistRoutes from './Routes/UserL.js'
// import deskRoutes from './Routes/DeskM.js'
// import rhadminRoutes from './Routes/RHAdmin.js'
// import rhreportRoutes from './Routes/RHReport.js'

// const app = express()
// app.use(express.json())
// app.use(cookieParser())

// app.use(cors())
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended: true}))

// app.use("/backend/Routes",authRoutes)
// app.use("/backend/Routes",adminprofilRoutes)
// app.use("/backend/Routes",userRoutes)   // adminRoutes est le nom du fichier 'userM' importer 
// app.use("/backend/Routes",userlistRoutes)   // adminRoutes est le nom du fichier 'userM' importer 
// app.use("/backend/Routes",agentlistRoutes)
// app.use("/backend/Routes",agentRoutes)
// app.use("/backend/Routes",deskRoutes)
// app.use("/backend/Routes",rhadminRoutes)
// app.use("/backend/Routes",rhreportRoutes)


// // This will handle any errors that occur in your routes and send an error response to the client.
// // app.use((err, req, res, next) => {
// //   console.error(err.stack);
// //   res.status(500).send('Something broke!');
// // });


// // le message affiché dans la page principale 
// app.get("/test", (req, res)=>{
//     res.json("hello this is my first backend")
//   });
  
// app.listen(3001, () => {
//   console.log('Connected to backend localhost:3001');
//   });

//   app.get("/RHReport", (req, res)=>{
//     const q = "SELECT * FROM employee "  
//     db.query(q,(err,data)=>{
//         if(err) return res.json(err)
//         return res.json(data)
//     })
//   })
  
//   app.get("/UserAgent", (req, res)=>{
//     const q = "SELECT * FROM agent "  
//     db.query(q,(err,data)=>{
//         if(err) return res.json(err)
//         return res.json(data)
//     })
//   })

//   app.get("/UserList", (req, res)=>{
//     const q = "SELECT * FROM user "  
//     db.query(q,(err,data)=>{
//         if(err) return res.json(err)
//         return res.json(data)
//     })
//   })

 
