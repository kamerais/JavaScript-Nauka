// static = słowoklucz (keyword), który definiuje własności i metody, które należą
//          do klasy samej w sobie niż dla obiektów stworzonych przy użyciu tej klasy
//          (klasa posiada to co statyczne, obiekty już nie)
/*
Przykład 1
class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2;
    }

    static getcircumference(radius){
        return 2 * this.PI * radius;
    }

    static getArea(radius){
        return this.PI * radius * radius;
    }
}

Co jeżeli spróbuję stworzyć obiekt i z jego klasy wziąć PI?
const MathUtil1 = new MathUtil();

console.log(MathUtil1.PI); // output: undefined

console.log(MathUtil.PI); // output: 3.14159
console.log(MathUtil.getDiameter(10)); // output: 20
console.log(MathUtil.getcircumference(10)); // output: 62.8318
console.log(MathUtil.getArea(10)); // output: 314.159
*/

class User{
    static userCount = 0;

    constructor(username) {
        this.username = username;
        User.userCount++; // w ten sposób będę liczył ile obiektów jest stworzonych
    }

    static getUserCount(){
        console.log(`There are ${User.userCount} users online currently`);
    }

    sayHello(){
        console.log(`Hello, my username is ${this.username}`);
    }
}

const user1 = new User("kamerais");

console.log(User.userCount); // output: 1

const user2 = new User("Bro Code");

console.log(User.userCount); // output: 2

const user3 = new User("Łukasz");

User.getUserCount() // output: There are 3 users online currently