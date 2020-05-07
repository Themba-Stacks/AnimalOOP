class Animal {
    constructor(name){
        this.name = name;
    }

    sound(){
        return ("<<<Sound>>>")
    }

    eat(){
        return (this.name + " eats")
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
//console.log(cat.sound())
//console.log(cat.eat());

class Dog extends Animal {
    constructor(name){
        super(name);
    }
    sound(){
        return ("Dog barks")
    }
}
let dog = new Dog ();
dog.name = "Rax";
//console.log(dog)
//console.log(dog.eat());

class Home {
    constructor(){
    this.adoptedpet = [];
    this.len = 0;
    }

    adoptPet(adopt){
        this.adoptedpet[this.len] = adopt;
        this.len++;
        return this.adoptedpet;
    }

    get pets(){
        return this.adoptedpet;
        }
    
    makeAllSounds(){
        for (let i = 0; i < this.adoptedpet.length; i++) {
            if (this.adoptedpet[i] == Dog){
                console.log('Dog barks')
            }else if(this.adoptedpet[i] == Cat){
                console.log('Cat meows')
            }   
        }
    }
}



var home = new Home();
home.adoptPet(dog)
home.adoptPet(cat)
home.makeAllSounds();
console.log(typeof(home.pets))
console.log(home.pets)
