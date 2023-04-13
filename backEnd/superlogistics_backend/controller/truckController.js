import { ObjectId } from "mongodb";
import { getDb } from "../util/db.js"
const COL = 'trucks'   // davor     trucks

export const getTrucks = async (req, res) => {
    console.log(req.headers['authorization']);
    const db = await getDb()
    const docs = await db.collection(COL).find({ user: req.headers['authorization'] }).toArray()
    console.log(docs);
    if (docs === null) res.end()
    else {
        res.json(docs)
    }
}

export const addTruck = async (req, res) => {
    console.log(req.body);
    const db = await getDb()
    const result = await db.collection(COL).insertOne(req.body)
    res.end()
}