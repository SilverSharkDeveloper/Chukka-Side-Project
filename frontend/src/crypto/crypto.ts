import CryptoJS from "crypto-js"

class Cryptography {
    cryptoKey: string;

    constructor() {
        this.cryptoKey = "chukka"
    }

    encrypt(data: string): string {
        return CryptoJS.AES.encrypt(data, this.cryptoKey).toString();
    }

    decrypt(data: string): string {
        return CryptoJS.AES.decrypt(data, this.cryptoKey).toString(CryptoJS.enc.Utf8);
    }
}

export function useCryptography(): Cryptography {
    return new Cryptography()
}
