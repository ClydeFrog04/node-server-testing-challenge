import express from "express";
import {pokemonRouter} from "./routes/pokemonRouter";

export const server = express();

server.use(express.json());
server.use("/api/pokemon", pokemonRouter);


server.get("/", async (req, res) => {
    res.send("Welcome!");
});