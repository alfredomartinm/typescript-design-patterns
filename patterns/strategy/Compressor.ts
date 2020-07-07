export class Compressor {
    constructor(private strategy: CompressionStrategy) {

    }

    public compress(data: any) {
        this.strategy.compress(data);
    }
}

interface CompressionStrategy {
    compress(data: any): void
}

export class ZipCompressionStrategy implements CompressionStrategy {
    compress(data: any): void {
        console.log(`compressing ${data} with zip algorithm`);
    }
}

export class RarCompressionStrategy implements CompressionStrategy {
    compress(data: any): void {
        console.log(`compressing ${data} with rar algorithm`);
    }
}