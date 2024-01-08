import express from "express";
import { Crypto } from "./crypto.js";

const app = express();
const port = 1812;

app.use(express.static("public"));

let topCryptos = [];

function getTopCryptos() {
    if (topCryptos.length < 3) {
        addTopCrypto("BTC", "images/icons/crypto/bitcoin.svg");
        addTopCrypto("ETH", "images/icons/crypto/ethereum.svg");
        addTopCrypto("SOL", "images/icons/crypto/solana.svg");
    }
    return topCryptos;
}

function addTopCrypto(cryptoSymbol, iconPath) {
    let topCrypto = new Crypto(cryptoSymbol, iconPath);
    topCryptos.push(topCrypto);
}

app.get("/", async (req, res) => {
    let topCryptos = getTopCryptos();

    for (let topCrypto of topCryptos) {
        await topCrypto.getData();
    }

    res.render("index.ejs", { topCryptos: topCryptos });
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})