// this = odniesienie do objektu, w którym THIS jest używane
//        (objekt jest zależny od natychmiastowego kontekstu)
//        person.name = this.name

const person1 = {
    name: "SpongeBob",
    favFood: "hamburgers",
    sayHello: function(){console.log(`Hi! I am ${this.name}`)} // bez this. to output: Hi! I am 
}

person1.sayHello(); // output: Hi! I am SpongeBob