import axios from "axios";
import { CryptoCompareAPIManager } from "../apis/crypto-compare/ccAPIManager.js";
import { v4 as UUIDGenerator } from "uuid";

export class Crypto {
    constructor(symbol, iconPath) {
        this.setUUID();
        this.setSymbol(symbol);
        this.setIcon(iconPath);
        this.setPrice(0);
        this.setTrendPercentage(0.00)
    }

    getUUID() {
        return this.uuid;
    }

    setUUID() {
        this.uuid = UUIDGenerator();
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

    getTrendPercentage() {
        return this.trendPercentage;
    }

    setTrendPercentage(newTrendPercentage) {
        this.trendPercentage = newTrendPercentage;
    }

}