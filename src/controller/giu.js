import db from '../config/db.js'

import { ObjectId } from "mongodb"



export async function  getGiu(req, res) {
    console.log("Rodou Get Giu")
  
    const Giu = await db.collection("Giu").find().toArray()

    if (!Giu) return res.status(404).send("Giu falhou")
    
    if(Giu) { 
        res.send(Giu).status(200)
    } else {
        res.sendStatus(404)
    }
}

export async function getgiuId(req, res) {
    console.log("Rodou GET giu id")
    const { id } = req.params;

    try {	
      const giu = await db.collection("Giu").findOne({ _id: (ObjectId(id)) })

      if (!giu) return res.status(404).send("Giu falhou")

      if (giu) {
        res.send(giu).status(200)
      }
      } catch (error) {
        res.status(500).send(error)
      }


}