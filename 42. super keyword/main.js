// super = keyword używane w klasach do wywołania konstruktora lub
//         dostać dostęp do właściwości i metod z klasy rodzicielskiej (superclass)
//         this = ten objekt
//         super = rodzic

class Animal{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    move(speed){
        console.log(`The ${this.name} moves at a speed of ${speed}mph`);
    }
}

class Rabbit extends Animal{
    constructor(name,age, runSpeed) {
        super(name,age); // dołącza gotowe this.name = name i this.age = age z klasy Animal
        this.runSpeed = runSpeed;
    }
    run(){
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed); // dołącza gotową metodę move(speed)
    }
}

class Fish extends Animal{
    constructor(name,age, swimSpeed) {
        super(name,age); // dołącza gotowe this.name = name i this.age = age z klasy Animal
        this.swimSpeed = swimSpeed;
    }
    swim(){
        console.log(`This ${this.name} can swim`);
        super.move(this.swimSpeed); // dołącza gotową metodę move(speed)
    }
}

class Hawk extends Animal{
    constructor(name,age, flySpeed) {
        super(name,age); // dołącza gotowe this.name = name i this.age = age z klasy Animal
        this.flySpeed = flySpeed;
    }
    fly(){
        console.log(`This ${this.name} can fly`);
        super.move(this.flySpeed); // dołącza gotową metodę move(speed)
    }
}

const rabbit = new Rabbit("rabbit", 1, 25);
const fish = new Fish("fish", 2, 12);
const hawk = new Hawk("hawk", 3, 50);

// testujemy name

console.log(rabbit.name); // output: rabbit
console.log(fish.name); // output: fish
console.log(hawk.name); // output: hawk

// testujemy age

console.log(rabbit.age); // output: 1
console.log(fish.age); // output: 2
console.log(hawk.age); // output: 3

// testujemy unikatowe własności

console.log(rabbit.runSpeed); // output: 25
console.log(fish.swimSpeed); // output: 12
console.log(hawk.flySpeed); // output: 50

// test czy ryba ma prędkość biegania?
// console.log(fish.runSpeed) // output: undefined

// testujemy unikatowe metody

rabbit.run(); // output: This rabbit can run
              //         The rabbit moves at a speed of 25mph
fish.swim(); // output: This fish can swim
              //         The fish moves at a speed of 25mph
hawk.fly(); // output: This hawk can fly
              //         The hawk moves at a speed of 25mph