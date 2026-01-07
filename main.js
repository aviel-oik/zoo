export class Animal {
    #energie
    constructor(name) {
        this.name = name;
        this.#energie = 100;
    }
    getEnergie() {
        return this.#energie;
    }
    eat(amount) {
        if (amount < 0)
            throw new Error("Amount must be positive");
        this.#energie += amount;
        if (this.#energie > 100)
            this.#energie = 100;
    }
    speak() {
        console.log(`...`);
    }
}

export class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    speak() {
        return "Woof!";
    }
}

export class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    speak() {
        return "Meow!";
    }
}

// // Example usage:
// const dog = new Dog("Buddy");
// dog.speak(); // Woof!
// console.log(dog.getEnergie()); // 100
// dog.eat(20);
// console.log(dog.getEnergie()); // 100

export class zoo {
    #animals
    constructor() {
        this.#animals = [];
    }
    addAnimal(animal) {
        if (!(animal instanceof Animal))
            // if (animal.prototype.isPrototypeOf(Animal))
            throw new Error("Only animals can be added to the zoo");
        this.#animals.push(animal);
    }
    makeAllSpeak() {
        const results = [];
        this.#animals.forEach(animal => results.push(animal.speak()));
        return results;
    }
}

