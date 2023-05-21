import express from 'express' 
import bodyParser from 'body-parser'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import db from './db.js'
import pkg from 'jsonwebtoken'
const {jwt} =pkg
import rhreportRoutes from './Routes/RHReport.js'
 

const app = express()
app.use("/RHReport",rhreportRoutes)

app.use(express.json())
app.use(cookieParser())

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.listen(3001, () => {
  console.log('Connected to backend localhost:3001');

  db.connect(function(err) {
    if (err) {
      console.error('Erreur de connexion à la base de données :', err);
    } else {
      console.log('Connecté à la base de données');
    }
  });
 
  });
// ----------date courante ------------------
  const currentDate = new Date();
const formattedDate = currentDate.toLocaleString();
console.log(formattedDate); // outputs something like "3/3/2023, 12:05:12 PM"
// ---------------------AUTHENTIFICATION-----------------------------------------------------------------

  app.post('/', (req, res) => {
    const q = "SELECT * FROM administrator WHERE email=? AND password = ? ";
    db.query(q, [req.body.email, req.body.password], (err, result) => {
      if (err)  return res.json({Error: "Error in Server",Error: "Error in running query"});
      if (result.length > 0) { return res.json({Status: "Success"});
    } else {
      return res.json({Status: "Error",Error: "Wrong Email or Password"});
    }
     
        // check password 
      // const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password) ;
      
      // if (!isPasswordCorrect) return res.status(400).json("Wrong username or password !")
      
      // const token = jwt.sign({ id: data[0].id}, "jwtkey" )
      // const {password, ...other} = data[0]
  
      // res.cookie("access_token", token ,{
      //   httpOnly:true
      // }).status(200).json(other)
  
  })
  })
  // ----------------------------SEND NEW DATA TO TO DB-------------------------------------------


  app.post('/RHAdmin', (req, res) => {
    // Insert the employee data into the database
    const sql = 'INSERT INTO employee (ID_Agent, FirstName_Ag, LastName_Ag, Email_Ag, Adress_Ag, Desk_Ag, Phone_Ag, Status_Ag, Unit_Ag, Language_Ag, Password_Ag) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [
      req.body.ID_Agent ,
      req.body.FirstName_Ag ,
      req.body.LastName_Ag ,
      req.body.Email_Ag ,
      req.body.Adress_Ag ,
      req.body.Desk_Ag ,
      req.body.Phone_Ag ,
      req.body.Status_Ag ,
      req.body.Unit_Ag ,
      req.body.Language_Ag ,
      req.body.Password_Ag ,
    ];
    db.query(sql, values, (err, result) => {
      if (err) res.json("there is an error");
        return res.json("Agent has been created successfully");
    });
  });


  app.post('/UserManage', (req, res) => {
    const sql = 'INSERT INTO user (`ID_Emp`,`FirstName_Us`,`LastName_Us`,`Email_Us`,`Password_Us`,`Adress_Us`,`Phone_Us`,`Desk_Us`,`Status_Us`,`Privilége_Us`,`Language_Us`) VALUES (?)'
    bcrypt.hash(req.body.Password_Us.toString(), 10, (err,hash) => {
      if (err) return res.json({Error: "Error in hashing password"})
      const values = [
        req.body.ID_Emp,
        req.body.FirstName_Us,
        req.body.LastName_Us,
        req.body.Email_Us,
        hash,
        req.body.Adress_Us,
        req.body.Phone_Us, 
        req.body.Desk_Us,
        req.body.Status_Us,
        req.body.Privilége_Us,
        req.body.Language_Us,
      ]
      db.query(sql,[values], (err,result) =>{
        if(err) return res.json({Error: "Inside singup query"})
          return res.json({Status: "Success"})
      })

    })

  })
  
  // app.post('/AgentManage', (req, res) => {
  //   const formData = req.body; // Données envoyées depuis le frontend
  
  //   // Insérer les données dans la base de données
  //   db.query('INSERT INTO agent SET ?', formData, (error, results) => {
  //     if (error) {
  //       console.error('Erreur lors de l\'enregistrement des données :', error);
  //       res.status(500).json({ error: 'Erreur lors de l\'enregistrement des données' });
  //     } else {
  //       console.log('Données enregistrées avec succès');
  //       res.json({ message: 'Données enregistrées avec succès' });
  //     }
  //   });
  // });
  

  app.post('/AgentManage', (req, res) => {
    // Insert the user data into the database
    const sql = 'INSERT INTO agent (ID_Agent, FirstName_Ag, LastName_Ag, Email_Ag, Adress_Ag, Desk_Ag, Phone_Ag, Status_Ag, Unit_Ag, Language_Ag, Password_Ag) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [
      req.body.ID_Agent ,
      req.body.FirstName_Ag ,
      req.body.LastName_Ag ,
      req.body.Email_Ag ,
      req.body.Adress_Ag ,
      req.body.Desk_Ag ,
      req.body.Phone_Ag ,
      req.body.Status_Ag ,
      req.body.Unit_Ag ,
      req.body.Language_Ag ,
      req.body.Password_Ag ,
    ];
    db.query(sql, values, (err, result) => {
      if (err) res.json("there is an error");
        return res.Status(200).json({message:"done"});
    });
  });



   app.post('/DeskManage', (req, res) => {
    // Insert the desk data into the database
    const sql = 'INSERT INTO desk (ID_Agent, FirstName_Ag, LastName_Ag, Email_Ag, Adress_Ag, Desk_Ag, Phone_Ag, Status_Ag, Unit_Ag, Language_Ag, Password_Ag) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [
      req.body.ID_Agent ,
      req.body.FirstName_Ag ,
      req.body.LastName_Ag ,
      req.body.Email_Ag ,
      req.body.Adress_Ag ,
      req.body.Desk_Ag ,
      req.body.Phone_Ag ,
      req.body.Status_Ag ,
      req.body.Unit_Ag ,
      req.body.Language_Ag ,
      req.body.Password_Ag ,
    ];
    db.query(sql, values, (err, result) => {
      if (err) res.json("there is an error");
        return res.json("desk has been created successfully");
    });
  });
  // ---------------------AFFICHE LA LISTE DES AGENTS ,DES USERS ET DES EMPLOYES ----------------------------------------
  app.get("/UserList", (req, res)=>{
    const q = "SELECT * FROM user "  
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
  })

  app.get("/AgentList", (req, res)=>{
    const q = "SELECT * FROM agent "  
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
  })

  app.get("/RHReport", (req, res)=>{
    const q = "SELECT * FROM employee "  
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
  })
  // --------------------------get element by ID---------------------------------------------------
  app.get('/RHAdmin/:ID_Emp', (req, res) => {
    const ID_Emp = req.params.ID_Emp;
    const sql = `SELECT FirstName_Emp,LastName_Emp,Email_Emp,NID,Manager_Emp FROM employee WHERE id = ${ID_Emp}`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });

