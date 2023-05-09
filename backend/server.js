import express from 'express' 
import bodyParser from 'body-parser';
import cors from 'cors';
import authRoutes from './Routes/Auth.js'
import adminprofilRoutes from './Routes/AdminProfil.js';
import userRoutes from './Routes/UserM.js'   // adminRoutes est le nom que j'ai donnée au page admin manage dans la page server.js  
import agentlistRoutes from './Routes/AgentL.js'
import agentRoutes from './Routes/AgentM.js'
import userlistRoutes from './Routes/UserL.js'
import deskRoutes from './Routes/DeskM.js'
import rhadminRoutes from './Routes/RHAdmin.js'
import rhreportRoutes from './Routes/RHReport.js'
import cookieParser from 'cookie-parser';


const app = express()
app.use(express.json())
app.use(cookieParser())

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use("/backend/Routes",authRoutes)
app.use("/backend/Routes",adminprofilRoutes)
app.use("/backend/Routes",userRoutes)   // adminRoutes est le nom du fichier 'userM' importer 
app.use("/backend/Routes",userlistRoutes)   // adminRoutes est le nom du fichier 'userM' importer 
app.use("/backend/Routes",agentlistRoutes)
app.use("/backend/Routes",agentRoutes)
app.use("/backend/Routes",deskRoutes)
app.use("/backend/Routes",rhadminRoutes)
app.use("/backend/Routes",rhreportRoutes)


// This will handle any errors that occur in your routes and send an error response to the client.
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


// le message affiché dans la page principale 
app.get("/test", (req, res)=>{
    res.json("hello this is my first backend")
  });
  
app.listen(3001, () => {
  console.log('Connected to backend localhost:3001');
  });