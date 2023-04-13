import express from 'express'
import cors from 'cors'
import './util/config.js'
import { login, register } from './controller/clientController.js'
import { addTruck, getTrucks } from './controller/truckController.js'
import morgan from 'morgan'

import { getDb } from "./util/db.js"


const app = express()
const PORT = process.env.PORT || 9999
const VITE_PORT = process.env.VITE_PORT || 5173

app.use(morgan('dev'))   //!!!  logger   morgan muss vor cors und express.json stehen 


app.use(cors({ origin: `http://localhost:${VITE_PORT}`}))
app.use(express.json())  // befüllt den req.body wenn der content-type application/json ist

// login und register
app.post('/api/v1/register', register)
app.post('/api/v1/login', login)

// trucks
app.get('/api/v1/trucks', getTrucks)
app.post('/api/v1/trucks', addTruck)


// Wir brauchen eine Route die uns die Anzahl der Trucks liefert die genau diesen einen client zugeordnet sind

const COL = 'trucks'
// ! backEnd         user: req.headers['authorization'] 
// ! frontEnd       user: localStorage.getItem('client')
app.get('/api/v1/trucksID', async (req, res) => { 
    try{
         console.log(req.body.user)
         console.log({message_User_ID_headers: req.headers['authorization']})
         console.log({message_User_ID_body_user: req.body.user})
        const db = await getDb()
        const result = await db.collection(COL).find({ user: req.headers['authorization'] })/* .toArray() */.count()   // ! .count() zählt die Anzahl der Treffer   .toArray() liefert ein Array mit all den Treffern
        console.log({ message_Anzahl_Trucks: result})
        res.status(299).json({ message: result })

    }catch(err){
        console.log(err);
        res.status(499).json({ message: err.message })
    }

})


app.listen(PORT, () => console.log('Ich lausche auf Port', PORT))
