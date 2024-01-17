// this = odniesienie do objektu, w którym THIS jest używane
//        (objekt jest zależny od natychmiastowego kontekstu)
//        person.name = this.name

const person1 = {
    name: "SpongeBob",
    favFood: "hamburgers",
    sayHello: function(){console.log(`Hi! I am ${this.name}`)}, // bez this. to output: Hi! I am 
                                             // this.name wygląda jak person1.name
    eat: function(){console.log(`${this.name} is eating his favorite food ${this.favFood}`)}
}
// WAŻNA INFORMAJCA
/*
    Jeżeli zrobimy console.log(this) to okaże się, że obiektem dla this jest okno naszej przeglądarki
    dlatego przy korzystaniu z arrow function this.name nie będzie odwoływało się do parametru name obiektu
    tylko będzie dalej odwoływać się do okna i dlatego dla eat napisanego jako
                                            eat: () => {console.log(`${this.name} is eating his favorite food ${this.favFood}`)}
                                            np. person1.eat(); output:   is eating his favorite food undefined
*/
person1.sayHello(); // output: Hi! I am SpongeBob
person1.eat(); // output:SpongeBob is eating his favorite food hamburgers

const person2 = {
    name: "Patrick",
    favFood: "pizza",
    sayHello: function(){console.log(`Hi! I am ${this.name}`)}, // bez this. to output: Hi! I am 
                                             // this.name wygląda jak person2.name
    eat: function(){console.log(`${this.name} is eating his favorite food ${this.favFood}`)}
}

person2.sayHello(); // output: Hi! I am Patrick
person2.eat(); // output:Patrick is eating his favorite food pizza