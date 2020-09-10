import express from "express";

export const server = express();

server.use(express.json());



server.get("/", async (req, res) => {
    res.send("Welcome!");
});