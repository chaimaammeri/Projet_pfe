import db from "../db.js";

export const addProfil = (req,res)=>{
const q = "SELECT * FROM administrator"  
db.query(q,(err,data)=>{
    if(err) return res.json(err)
    return res.json(data)
}
)}