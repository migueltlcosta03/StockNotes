import express from "express";
import { Crypto } from "./crypto.js";

const app = express();
const port = 1812;

app.use(express.static("public"));

app.get("/", async (req, res) => {
    let topCryptos = []
    
    let topCrypto1 = new Crypto("BTC");
    let topCrypto2 = new Crypto("ETH");
    let topCrypto3 = new Crypto("SOL");

    topCryptos.push(topCrypto1);
    topCryptos.push(topCrypto2);
    topCryptos.push(topCrypto3);

    for (let topCrypto of topCryptos) {
        await topCrypto.getData();
    }

    res.render("index.ejs", {topCryptos: topCryptos });
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})