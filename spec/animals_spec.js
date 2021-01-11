let animal = require("../src/animal");

let Dog = animal.Dog;
let Cat = animal.Cat;

describe("class Dog",()=>{
    let dog = new Dog()
    it("Should return Food",()=>{
        expect(dog.eat()).toBe("Food")
    });

    it("Should be false if eat is not 'Food'",()=>{
        expect(dog.eat()==="food").toBe(false)
    });

    it("should return 'Bark'",()=>{
        expect(dog.sound()).toBe("Bark")
    });

    it("Should be false if sound is not 'Bark'",()=>{
        expect(dog.sound()==="Meow").toBe(false)
    });
});

describe("class Dog",()=>{
    let cat = new Cat()
    it("Should return Food",()=>{
        expect(cat.eat()).toBe("Food")
    });

    it("Should be false if eat is not 'Food'",()=>{
        expect(cat.eat()==="food").toBe(false)
    });

    it("should return 'Meow'",()=>{
        expect(cat.sound()).toBe("Meow")
    });

    it("Should be false if sound is not 'Bark'",()=>{
        expect(cat.sound()==="Bark").toBe(false)
    });

});