import express from 'express' 
import mysql from 'mysql'
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express()
// app.use(cors())
const db = mysql.createConnection({
  host:"localhost" ,
  user:"root" ,
  password:"Chaimamysql123@",
  database:"dxctech"
});
// if there is a auth problem 
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password_ BY 'Chaimamysql123@'

app.use(express.json())

// --------------------------------------------------------------------------------------------------------
// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  
  // Check if email and password are valid
  // You would typically check these against a database
  if (email === 'example@example.com' && password === 'password') {
    // Return a success response
    res.json({ success: true });
  } else {
    // Return an error response
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// Start server
app.listen(3001, () => {
  console.log('Server started on port 3001');
});
// --------------------------------------------------------------------------------------




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





app.listen(8800, () => {
  console.log('Connected to backend localhost:8800');
});
