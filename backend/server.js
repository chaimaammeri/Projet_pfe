import express from 'express' 
import bodyParser from 'body-parser';
import cors from 'cors';
import adminRoutes from './Routes/AdminM.js'   // adminRoutes est le nom que j'ai donnée au page admin manage dans la page server.js  
import agentRoutes from './Routes/AgentM.js'
import authRoutes from './Routes/Auth.js'
import botRoutes from './Routes/BotM.js'
import deskRoutes from './Routes/DeskM.js'
import homeRoutes from './Routes/Home.js'
import rhadminRoutes from './Routes/RHAdmin.js'
import rhreportRoutes from './Routes/RHReport.js'


const app = express()
app.use(express.json())

app.use("/backend/Routes",adminRoutes)   // adminRoutes est le nom du fichier 'adminM' importer 
app.use("/backend/Routes",agentRoutes)
app.use("/backend/Routes",authRoutes)
app.use("/backend/Routes",botRoutes)
app.use("/backend/Routes",deskRoutes)
app.use("/backend/Routes",homeRoutes)
app.use("/backend/Routes",rhadminRoutes)
app.use("/backend/Routes",rhreportRoutes)

app.use(cors())
app.use(bodyParser.json())

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