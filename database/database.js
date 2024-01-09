import { initializeApp } from "firebase/app";
import { getFirestore, collection, setDoc, getDocs, doc } from "firebase/firestore";

export class Database {
    constructor() {
        this.#setConfig({
            apiKey: "AIzaSyAz5U0Uv-1P8dKjydRtrxEVOzZ7k7kFUv0",
            authDomain: "cryptowatch-d1574.firebaseapp.com",
            projectId: "cryptowatch-d1574",
            storageBucket: "cryptowatch-d1574.appspot.com",
            messagingSenderId: "719251415728",
            appId: "1:719251415728:web:d651397f5844ac62185175",
            measurementId: "G-JJKJ14L53S"
        });
    }
    
    #getConfig() {
        return this.config;
    }

    #setConfig(newConfig) {
        this.config = newConfig;
    }

    #initalize() {
        return initializeApp(this.#getConfig());
    }

    #initializeFirestore() {
        return getFirestore(this.#initalize());
    }

    async addTopCrypto(crypto) {
        const db = this.#initializeFirestore();
        try {
            const data = {
                uuid: crypto.getUUID(),
                symbol: crypto.getSymbol(),
                icon: crypto.getIcon(),
                price: crypto.getPrice(),
                trendPercentage: crypto.getTrendPercentage()
            }
            await setDoc(doc(db, "topCryptos", crypto.getUUID()), data);
            console.log(`CRYPTO SUCCESSFULLY ADDED TO TOP CRYPTOS LIST! CRYPTO ID: ${crypto.getUUID()}`);
        } catch(e) {
            console.log(`ERROR: ${e}`);
        }
    }

    async getTopCryptos() {
        const db = this.#initializeFirestore();
        let topCryptos = [];

        const topCryptosSnapshot = await getDocs(collection(db, "topCryptos"));
        topCryptosSnapshot.forEach((topCrypto) => {
            topCryptos.push(topCrypto.data());
        });
        
        return topCryptos;
    }
}