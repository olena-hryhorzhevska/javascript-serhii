
// ❗️Prototypes
// const animal = {
//   eats: true,
//   walk() {
//     console.log('Animal can walk!');
//   }
// }

// const dog = Object.create(animal);
// dog.barks = true;

// console.log(dog);
// console.log(dog.eats);

// [[Prototype]]



// ❗️Class

// class Cat {
//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//   }
//   meow() {
//     console.log(`${this.name} says Hi!`);
//   }
// }

// const cat1 = new Cat('Miya', 'white');
// const cat2 = new Cat('Lola', 'black');

// cat1.meow();
// cat2.meow();




// ❗️Наследование EXTENDS

// class Animal {
//   eat() {
//     console.log('Animal eats');
//   }
// }

// class Dog extends Animal {
//   bark() {
//     console.log('Dog barks!'); 
//   }
// }

// const rex = new Dog();
// console.log(rex);

// rex.bark()
// rex.eat();


// ❗️SUPER

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name);
//     this.breed = breed;
//   }

//   info() {
//     console.log(`${this.name} is a ${this.breed}`);
//   }
// }

// const dog = new Dog('Rex', 'Labrador');
// console.log(dog);
// dog.info();



// ❗️Getter / Setter

// class Temperature {
//   constructor(celsius) {
//     this.celsius = celsius;
//   }

//   get fahrenheit() {
//     return this.celsius * 1.8 + 32;
//   }

//   set fahrenheit(value) {
//     this.celsius = (value - 32) / 1.8;
//   }
// }

// const temp = new Temperature(0); // {celsius: 0}
// console.log(temp);
// console.log(temp.fahrenheit);
// temp.fahrenheit = 200;
// console.log(temp.celsius.toFixed(1));
// console.log(temp);





class Car {
  constructor(model, price) {
    this.model = model;
    this.price = price;
  }

  getInfo() {
    console.log(`${this.model} costs ${this.price}`); 
  }

  static compare(car1, car2) {
    return car1.price - car2.price
  }
}

const bmw = new Car('BMW', '30000');
const audi = new Car('Audi', '3500');

console.log(bmw);
bmw.getInfo()

console.log(Car.compare(bmw, audi));


