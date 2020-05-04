class Animal {
    constructor(name){
        this.name = name;
    }

    sound(){
        return ("<<<Sound>>>")
    }

    eat(){
        return (this.name + "eat")
    }
}
class Cat extends Animal {
    constructor(name){
        super(name);

    }
sound(){
    return ("Cat meows")
}
}
let cat = new Cat ();
cat.name = "Stormy";
console.log(cat.sound())
console.log(cat.eat());

class dog extends Animal {
    constructor(name){
        super(name);
    }
    sound(){
        return ("Dog barks")
    }
}
let dog = new Dog ();
cat.name = "Rax";
console.log(dog.sound())
console.log(dog.eat());

