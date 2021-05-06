class Mammal {
    constructor(species, weight){
        this.species = species;
        this.weight = weight;
        this.energy = 100;
    }

    eat(numCalories) {
        // if(numCalories > 100){
        //     this.energy += 10
        // }else{
        //     this.energy += numCalories
        // }
    numCalories>=100? this.energy += 100 : this.energy += numCalories
    }


}

class Dog extends Mammal{
    constructor(weight, breed, name){
        super("Canine", weight)
        this.breed = breed;
        this.name = name;
    }
}

class Cat extends Mammal{
    
}




const d1 = new Dog(25, "golden retriever", "Buster")
console.log(d1)
d1.eat(1000)
console.log(d1)


// const m1 = new Mammal("dog", "25")
// const m2 = new Mammal("cat", "15")
// const m3 = new Mammal("cat", "30")


// m1.eat(1000)
// m2.eat(10)
// console.log(m1)
// console.log(m2)
// console.log(m3)

// console.log(m1)
// console.log(m2)
// console.log(m3)