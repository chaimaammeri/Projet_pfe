import db from "../db.js"
import pkg from 'jsonwebtoken'
const {jwt} =pkg
import bcrypt from 'bcryptjs'

export const login = (req, res) => {
  // CHECK   administrator

  const q = "SELECT * FROM administrator WHERE email=? AND password = ? ";
  
  db.query(q, [req.body.email, req.body.password], (err, data) => {
    if (err)  return res.json(err);
    if (data.length === 0)  return res.status(404).json("Administrator not found");
    
   
      // check password 
    const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password) ;
    
    if (!isPasswordCorrect) return res.status(400).json("Wrong username or password !")
    
    const token = jwt.sign({ id: data[0].id}, "jwtkey" )
    const {password, ...other} = data[0]

    res.cookie("access_token", token ,{
      httpOnly:true
    }).status(200).json(other)

});
};



export const logout = (req, res) =>{

};





// export const login = (req, res) => {
//   // CHECK   administrator

//   const q = "SELECT * FROM administrator WHERE email=? AND password = ? ";
//   db.query(q, [req.body.email, req.body.password], (err, data) => {
//     if (err)  return res.json(err);
//     if (data.length > 0) {
//       return res.json({Status: "Administrator not found"});
//     } else {
//       return res.json({Status: "Success"});
//     }
    