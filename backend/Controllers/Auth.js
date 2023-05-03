import db from "../db.js";

export const login = (req, res) => {
  // CHECK EMAIL administrator

  const q = "SELECT * FROM administrator WHERE Email_Admin=?";
  const values =[
    
  ]

  // hash a password 
  // const salt = bcrypt.genSaltSync(10);
  // const hash = bcrypt.hashSync(req.body.password, salt);
  
  db.query(q, [req.body.Email_Admin], (err, data) => {
    if (err) {
      return res.json(err);
    }
    if (data.length === 0) {
      return res.status(404).json("Administrator not found");
    }
   
      // check password 
    const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password) ;
    
    if (!isPasswordCorrect) return res.status(400).json("Wrong username or password !")
    
});
};



export const logout = (req, res) =>{

};
