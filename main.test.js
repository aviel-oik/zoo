import test, { describe } from 'node:test';
import assert from 'node:assert/strict';
import { Animal, Dog, Cat, zoo } from './main.js';

// Animal initialization
const animal = new Animal('nameOfAnimal');

// Animal.eat() increases energy and never goes above 100
test('Animal.eat() increases energy and never goes above 100', () => {
    animal.eat(20);
    assert.equal(animal.getEnergie(), 100);
    animal.eat(1000000);
    assert.equal(animal.getEnergie(), 100);
});

// Dog.speak() returns "Woof!" and Cat.speak() returns "Meow!"
test('Dog.speak() returns "Woof!"', () => {
    const dog = new Dog('Buddy');
    assert.equal(dog.speak(), "Woof!");
});

test('Cat.speak() returns "Meow!"', () => {
    const cat = new Cat('Whiskers');
    assert.equal(cat.speak(), "Meow!");
});

// Zoo.addAnimal() throws an Error when adding something that is not an Animal
test('Zoo.addAnimal() throws an Error when adding something that is not an Animal', () => {
    const myZoo = new zoo();
    assert.throws(() => {
        myZoo.addAnimal({});
    }, { message: "Only animals can be added to the zoo" });
});

// Zoo.makeAllSpeak() returns the correct array in the correct order
test('Zoo.makeAllSpeak() returns the correct array in the correct order', () => {
    const myZoo = new zoo();
    const dog = new Dog('Buddy');
    const cat = new Cat('Whiskers');
    myZoo.addAnimal(dog);
    myZoo.addAnimal(cat);
    const sounds = myZoo.makeAllSpeak();
    assert.deepEqual(sounds, ["Woof!", "Meow!"]);
});