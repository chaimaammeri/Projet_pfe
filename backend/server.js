import express from 'express' 
import bodyParser from 'body-parser'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import db from './db.js'
import pkg from 'jsonwebtoken'
const {jwt} =pkg


const app = express()
app.use(express.json())
app.use(cookieParser())

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.listen(3001, () => {
  console.log('Connected to backend localhost:3001');
  });
// ----------date courante ------------------
  const currentDate = new Date();
const formattedDate = currentDate.toLocaleString();
console.log(formattedDate); // outputs something like "3/3/2023, 12:05:12 PM"


// le message affiché dans la page principale 
app.get("/test", (req, res)=>{
    res.json("hello this is my first backend")
  });


  app.post('/Login', (req, res) => {
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


  app.get('/RHAdmin/:ID_Emp', (req, res) => {
    const ID_Emp = req.params.ID_Emp;
    const sql = `SELECT FirstName_Emp,LastName_Emp,Email_Emp,NID,Manager_Emp FROM employee WHERE id = ${ID_Emp}`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  });


  app.get("/RHReport", (req, res)=>{
    const q = "SELECT * FROM employee "  
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


  app.post('/AgentManage', (req, res) => {
    const { firstName, lastName, email, password } = req.body;
  
    // Insert the user data into the database
    const sql = 'INSERT INTO employee (ID_Agent, FirstName_Ag, LastName_Ag, Email_Ag, Adress_Ag, Phone_Ag, Desk_Ag, Status_Ag, Unit_Ag, Language_Ag) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [ID_Agent, FirstName_Ag, LastName_Ag, Email_Ag, Adress_Ag, Phone_Ag, Desk_Ag, Status_Ag, Unit_Ag, Language_Ag];
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error creating agent');
      }
      console.log('Agent created successfully');
      res.send('Agent created successfully');
    });
  });
  


  app.get("/AgentManage", (req, res)=>{
    const q = "SELECT * FROM agent "  
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
  })

  app.get("/UserList", (req, res)=>{
    const q = "SELECT * FROM user "  
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
  })

 
