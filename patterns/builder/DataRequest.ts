export class DataRequest {

    constructor(private readonly name: string,
        private readonly age: number) { }

    public getName(): string {
        return this.name;
    }

    public getAge(): number {
        return this.age;
    }

    public static builder(): DataRequestBuilder {
        return new DataRequestBuilder();
    }
}

class DataRequestBuilder {

    private name: string;
    private age: number;

    constructor() { }

    public withName(name: string): DataRequestBuilder {
        this.name = name;
        return this;
    }

    public withAge(age: number): DataRequestBuilder {
        this.age = age;
        return this;
    }

    public build(): DataRequest {
        return new DataRequest(this.name, this.age);
    }
}