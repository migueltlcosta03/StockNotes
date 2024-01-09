import express from "express";
import { Database } from "./database/database.js";

const app = express();
const port = 1812;

app.use(express.static("public"));


app.get("/", async (req, res) => {
    let db = new Database();
    let topCryptos = await db.getTopCryptos();
    console.log(topCryptos);
    res.render("index.ejs");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});