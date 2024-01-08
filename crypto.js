import axios from "axios";
import { CryptoCompareAPIManager } from "./apis/crypto-compare/ccAPIManager.js";

export class Crypto {
    constructor(symbol, iconPath) {
        this.setSymbol(symbol);
        this.setIcon(iconPath);
        this.setPrice(0);
    }

    getSymbol() {
        return this.symbol;
    }

    setSymbol(newSymbol) {
        this.symbol = newSymbol;
    }
    
    getIcon() {
        return this.iconPath;
    }

    setIcon(newIconPath) {
        this.iconPath = newIconPath;
    }

    getPrice() {
        return this.price;
    }

    setPrice(newPrice) {
        this.price = newPrice;
    }

    async getData() {
        const ccAPIManager = new CryptoCompareAPIManager();
        const APIKEY = ccAPIManager.getAPIKey();

        try {
            const response = await axios.get(`https://min-api.cryptocompare.com/data/price?fsym=${this.getSymbol()}&tsyms=USD`, {
                headers: {
                    Authorization: `Apikey ${APIKEY}`
                }
            });
            const data = response.data;
            this.setPrice(data["USD"]);
        } catch(error) {
            return error.message;
        }
    }
}