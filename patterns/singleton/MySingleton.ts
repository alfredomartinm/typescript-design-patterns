export class MySingleton {

    private static instance: MySingleton;
    private time: number;

    private constructor() {
        console.log("initializing singleton");
        this.time = Date.now();
    }

    static getInstance(): MySingleton {
        if (!MySingleton.instance) {
            MySingleton.instance = new MySingleton();
        }
        return MySingleton.instance;
    }

    public getTime(): number {
        return this.time;
    }
}