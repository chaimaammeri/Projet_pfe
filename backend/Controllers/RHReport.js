import db from "../db.js";

export const addRHR = (req,res)=>{
    const q = "SELECT * FROM employee "  
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    }
    )}