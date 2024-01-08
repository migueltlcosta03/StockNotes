export class CryptoCompareAPIManager {
    constructor() {
        this.setAPIKey("e948376f469f9e27632c92c7a2db179cbb2ff7c7198ac07069e6cb885d70b4e7");
        this.setConfig({
            headers: {
                Authentication: `ApiKey ${this.getAPIKey()}`
            }
        })
    }
    
    getAPIKey() {
        return this.apiKey;
    }

    setAPIKey(newAPIKey) {
        this.apiKey = newAPIKey;
    }

    getConfig() {
        return this.config;
    }

    setConfig(newConfig) {
        this.config = newConfig;
    }
}