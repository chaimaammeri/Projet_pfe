import db from "../db.js";

export const addUser = (req,res)=>{
const q = "INSERT INTO user (`ID_User`,`FirstName_Us`,`LastName_Us`,`Email_Us`,`Password_Us`,`Adress_Us`,`Phone_Us`,`Desk_Us`,`Status_Us`) VALUES(?)"
const valus =[
    req.body.ID_User,
    req.body.FirstName_Us,
    req.body.LastName_Us,
    req.body.Email_Us,
    req.body.Password_Us,
    req.body.Adress_Us,
    req.body.Phone_Us,
    req.body.Desk_Us,
    req.body.Status_Us,
]
db.query(q,[values],(err, data)=>{
    if (err) return res.json(err);
    return res.json("User has been created sucessfully.")
})
}

export const getUser = (req,res)=>{
    const q = "SELECT * FROM user "  
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    }
    )}