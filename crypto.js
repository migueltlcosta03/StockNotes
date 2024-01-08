import axios from "axios";
import { CryptoCompareAPIManager } from "./apis/crypto-compare/ccAPIManager.js";

export class Crypto {
    constructor(symbol, iconPath) {
        this.setSymbol(symbol);
        this.setIcon(iconPath);
        this.setPrice(0);
    }

    getIcon() {
        return this.iconPath;
    }

    setIcon(newIconPath) {
        this.iconPath = newIconPath;
    }

    getSymbol() {
        return this.symbol;
    }

    setSymbol(newSymbol) {
        this.symbol = newSymbol;
    }

    getTrendPercentage() {
        return this.trendPercentage;
    }

    setTrendPercentage(newTrendPercentage) {
        this.trendPercentage = newTrendPercentage;
    }

    getPrice() {
        return this.price;
    }

    setPrice(newPrice) {
        this.price = newPrice;
    }

    async getData() {
        const ccAPIManager = new CryptoCompareAPIManager();
        const config = ccAPIManager.getConfig();

        function calcTrendPercentage(openPrice, currentPrice) {
            const trPercentage = (((currentPrice * 100) / openPrice) - 100).toFixed(2);
            return trPercentage;
        }

        try {
            const response = await axios.get(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${this.getSymbol()}&tsyms=USD`, config);
            const data = response.data;
            
            let openPrice =  data["RAW"][`${this.getSymbol()}`]["USD"]["OPENDAY"].toFixed(2);
            let currentPrice = data["RAW"][`${this.getSymbol()}`]["USD"]["PRICE"].toFixed(2);

            this.setPrice(currentPrice);
            this.setTrendPercentage(calcTrendPercentage(openPrice, currentPrice));
        } catch(error) {
            return error.message;
        }
    }

}