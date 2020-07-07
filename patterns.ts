import { MySingleton } from './patterns/singleton/MySingleton';
import { Compressor, RarCompressionStrategy, ZipCompressionStrategy } from './patterns/strategy/Compressor';

console.log("Testing design patterns in typescript")

console.log(" ====== Singleton ====== ")
let instance1 = MySingleton.getInstance();
let instance2 = MySingleton.getInstance();
console.log(instance1 === instance2);
console.log(instance1.getTime());
console.log(instance2.getTime());

console.log(" ====== Strategy ====== ")
let rarCompressor = new Compressor(new RarCompressionStrategy());
let zipCompressor = new Compressor(new ZipCompressionStrategy());
rarCompressor.compress("data");
zipCompressor.compress("data");
