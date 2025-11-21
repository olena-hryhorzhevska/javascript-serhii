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

// class Car {
//   constructor(model, price) {
//     this.model = model;
//     this.price = price;
//   }

//   getInfo() {
//     console.log(`${this.model} costs ${this.price}`);
//   }

//   static compare(car1, car2) {
//     return car1.price - car2.price
//   }
// }

// const bmw = new Car('BMW', '30000');
// const audi = new Car('Audi', '3500');

// console.log(bmw);
// bmw.getInfo()

// console.log(Car.compare(bmw, audi));

// ❗️Приватность

// class User {
//   static #takenEmails = [];
//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }

//   #email;
//   constructor(params) {
//     this.#email = params.email;
//     User.#takenEmails.push(params.email);
//   }
// }

// const mango = new User({
//   email: 'mango@gmail.com'
// })

// console.log(mango);

// console.log(User.isEmailTaken('pole@gamil'));
// console.log(User.isEmailTaken('mango@gmail.com'));

// class User {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const user = new User('Serhii');
// console.log(user.name);

// user.name = 'Anna'
// console.log(user.name);

// class User {
//   #password; // private

//   constructor(name, password) {
//     this.name = name;
//     this.#password = password;
//   }
//   checkPassword(pass) {
//     return this.#password === pass;
//   }
// }

// const user = new User('Serhii', '123');
// console.log(user.checkPassword('123'));

// class User {
//   static roles = {
//     admin: 'admin',
//     editor: 'editor',
//     basic: 'basic'
//   }

//   #email;
//   #role;

//   constructor(params) {
//     this.#email = params.email;
//     this.#role = params.role || User.roles.basic;
//   }

//   get role() {
//     return this.#role;
//   }

//   set role (newRole) {
//     this.#role = newRole;
//   }
// }

// const alice = new User({
//   email: 'alice@gamil.com',
//   role: User.roles.admin,
// })

// console.log(alice.role);
// alice.role = User.roles.basic;
// console.log(alice.role);

// class dog: input: type, name, birth_date
// method1: greeting - i am ... and my age is ... return str
// method2: return age return int
// method3: is_birthday return 1/0

// class Account {
//   static #registeredEmails = [];

//   static isEmailTaken(email) {
//     return this.#registeredEmails.includes(email);
//   }

//   #email;
//   #password;

//   constructor(email, password) {
//     if (Account.isEmailTaken(email)) throw new Error('Email taken');
//     this.#email = email;
//     Account.#registeredEmails.push(email);

//     this.password = password; // setter
//   }

//   get email() {
//     return this.#email;
//   }

//   set password(newPass) {
//     if (newPass.length < 6) throw new Error('Short password');
//     this.#password = newPass;
//   }

//   checkPassword(pass) {
//     return this.#password === pass;
//   }
// }

// // Создаем пользователя
// const a1 = new Account('test@mail.com', '123456');
// console.log(a1.email); // 'test@mail.com'

// // Проверяем пароль
// console.log(a1.checkPassword('123456')); // true
// console.log(a1.checkPassword('wrong'));  // false

// // Проверяем занят ли email
// console.log(Account.isEmailTaken('test@mail.com')); // true
// console.log(Account.isEmailTaken('free@mail.com')); // false

// // Меняем пароль через setter
// a1.password = 'newPass123';
// console.log(a1.checkPassword('newPass123')); // true

// // Попытка создать аккаунт с занятым email
// try {
//   const a2 = new Account('test@mail.com', '111111');
// } catch (e) {
//   console.log(e.message); // 'Email taken'
// }

// // Слишком короткий пароль (setter)
// try {
//   a1.password = '123';
// } catch (e) {
//   console.log(e.message); // 'Short password'
// }

// call, bind, apply
// function showName() {
//   console.log(this.name + 'hello');
// }

// const user = { name: "Serhii" }

// showName(); // this = undefined

// CALL Вызывает функцию сразу = передает аргументы через запятую
// APPLY Вызывает функцию сразу = передает аргументы массив
// BIND Вызывает функцию НЕ сразу = возвращает новую функцию, которую можно вызвать позже

// ❗️CALL
// function greet(city) {
//   console.log(`Hello, I am ${this.name} from ${city}`);
// }

// const user = { name: 'Lera' }
// greet.call(user, "Toronto");

// ❗️APPLY
// function sum(a, b, c) {
//   console.log(a + b + c);
// }

// sum.apply(null, [1, 2, 3])

// ❗️BIND

// const user = {
//   name: 'Valeriy'
// }

// function greet() {
//   console.log(`Hello, I am ${this.name}`);
// }

// const fn = greet.bind(user);
// fn();

// class Formatter {
//   static print() {
//     console.log(`${this.title}: ${this.price}$`);
//   }
// }

// class Product {
//   constructor(title, price) {
//     this.title = title;
//     this.price = price;
//   }
// }

// const phone = new Product('Iphone', 9999);
// Formatter.print.call(phone)





// "use strict";

// const customer = {
//   username: "Jacob",
// 	sayHello() {
// 		console.log(`Hello, ${this.username}!`);
//   }
// };

// customer.sayHello(); // "Hello, Jacob!"

// const greet = customer.sayHello;

// greet(); // TypeError: Cannot read properties of undefined (reading 'username')



// const obj = {
//   a: 10,
//   getA() {
//     return this.a;
//   }
// }

// console.log(obj.b);







// "use strict";

// const customer = {
//   username: "Jacob",
// 	sayHello() {
// 		console.log(`Hello, ${this.username}!`);
//   }
// };

// customer.sayHello(); // "Hello, Jacob!"

// const greet = customer.sayHello.bind(customer);

// greet(); // "Hello, Jacob!"







"use strict";

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// };

// function makeMessage(callback) {
//   // callback() — це виклик методу getFullName в глобальному контексті
//   const username = callback();
//   console.log(`Processing an application from ${username}`);
// }

// makeMessage(customer.getFullName); // TypeError: Cannot read properties of undefined (reading 'firstName')



const customer = {
  firstName: "Jacob",
  lastName: "Mercer",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

function makeMessage(callback) {
	const username = callback();
	console.log(`Processing an application from ${username}`);
}

makeMessage(customer.getFullName.bind(customer)); // "Processing an application from Jacob Mercer"







