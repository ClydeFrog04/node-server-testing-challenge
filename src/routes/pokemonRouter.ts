import express from "express";
import * as pokemonModel from "../models/pokemonModel";

export const pokemonRouter = express.Router();


//create
pokemonRouter.post("/",  async (req, res) => {
    try {

    } catch (e) {
        console.log(e.stack);
        res.status(500).json({error: "Error creating pokemon"});
    }
});


//delete