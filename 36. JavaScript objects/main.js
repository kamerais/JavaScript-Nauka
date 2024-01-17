// object = To kolekcja powiązanych ze sobą własności i/lub metod
//          może reprezentować objekty ze świata prawdziwego (ludzie, produkty, miejsca)
//          object = {key: value,function()}

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
}

console.log(person1.firstName) // output: Spongebob
console.log(person1.lastName) // output: Squarepants
console.log(person1.age) // output: 30
console.log(person1.isEmployed) // output: true

const person2 ={
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false,
}

console.log(person2.firstName) // output: Patrick
console.log(person2.lastName) // output: Star
console.log(person2.age) // output: 42
console.log(person2.isEmployed) // output: false