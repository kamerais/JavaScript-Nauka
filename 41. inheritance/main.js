// inheritance (dziedziczenie) = pozwala nowej klasie dziedziczyć własności oraz metody
//                               z innej istniejącej klasy (rodzic -> dziecko)
//                               pomaga przy reużywalności kodu

class Animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal{
    name = "rabbit";
    // dzieci klasy moga mieć swoje unikalne metody
    run(){
        console.log(`${this.name} is running`)
    }
}

class Fish extends Animal{
    name = "fish";
    swim(){
        console.log(`${this.name} is swimming`)
    }
}

class Hawk extends Animal{
    name = "hawk";
    fly(){
        console.log(`${this.name} is flying`)
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();
// test dla alive
fish.alive = false;

console.log(rabbit.alive); // output: true
console.log(fish.alive); // output: false
console.log(rabbit.alive); // output: true
// test dla eat
rabbit.eat(); // output: This rabbit is eating
fish.eat(); // output: This fish is eating
hawk.eat(); // output: This hawk is eating

// test dla sleep
rabbit.sleep(); // output: This rabbit is sleeping
fish.sleep(); // output: This fish is sleeping
hawk.sleep(); // output: This hawk is sleeping

// test dla unikalnych metod

rabbit.run(); // output: rabbit is running
fish.swim(); // output: fish is running
hawk.fly(); // output: hawk is running