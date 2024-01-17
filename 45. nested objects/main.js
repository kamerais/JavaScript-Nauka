// nested objects = Obiekty wewnątrz innych obiektów.
//                  Pozwalają ci na reprezentowanie bardziej skomplikowanych struktur danych
//                  Objekt dziecko jest załączony przez rodzicielski Objekt

//                  Person{Address{}, ContactInfo{}}
//                  ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}

const person = {
    fullName: "Spongebob Squarepants",
    age: 30,
    isStudent: true,
    hobbies: ["karate", "jellyfishing","cooking"],
    address: {
        street: "124 Conch St.",
        city: "Bikini Bottom",
        country: "Int. Water"
    }
}

console.log(person.fullName); // output: Spongebob Squarepants
console.log(person.age); // output: 30
console.log(person.isStudent); // output: true
console.log(person.hobbies); // output: ["karate", "jellyfishing","cooking"]
console.log(person.address.street); // output: true
console.log(person.address.city); // output: Bikini Bottom
console.log(person.address.country); // output: Int. Water

// teraz użyję pętli, aby dostać właściwości obiektu address

for (const property in person.address){
    console.log(person.address[property]);
    /*
        output:
        124 Conch St.
        Bikini Bottom
        Int. Water
    */
}
class Person{
    constructor(name,age, ...address) {
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}
class Address{
    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }

}

const person1 = new Person("kamerais", 19, "Łazienkowska 31", "Warszawa", "Polska");

console.log(person1.name); // output: kamerais
console.log(person1.age); // output: 19
console.log(person1.address.street); // output: Łazienkowska 31
console.log(person1.address.city); // output: Warszawa
console.log(person1.address.country); // output: Polska