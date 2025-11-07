// function greet(name) {
//   console.log('Hello, ' + name);
// }

// greet('Serhii')
// greet('Lena')


// function repeatMessage(message, times) {
//   for (let i = 1; i <= times; i++) {
//     console.log(`${i}. ${message}`);
//   }
// }

// repeatMessage('Hello World!', 5)



// function countEven(numbers) {
//   let count = 0;
//   for (let num of numbers) {
//     if (num % 2 === 0) {
//       count++
//     }
//   }
//   console.log(`Amount of even numbers: ${count}`);
// }


// countEven([2, 4, 6, 3, 7, 9])
// countEven([1, 4, 6, 3, 7, 9]);




// function countByCategory(products) {
//   const counts = {};

//   for (let product of products) {
//     const category = product.category;
//     counts[category] = (counts[category] || 0) + 1;

//                             //undefined
//     // counts['Fruits'] = (counts['Fruits'] || 0) + 1

//     // counts['Fruits'] = (1 || 0) + 1 = 2
//   }

//   return counts;
// }

// const products = [
//   { name: "Apple", category: "Fruits" },
//   { name: "Banana", category: "Fruits" },
//   { name: "Carrot", category: "Vegetables" },
//   { name: "Broccoli", category: "Vegetables" },
//   { name: "Milk", category: "Dairy" },
// ];

// console.log(countByCategory(products));
// // 👉 { Fruits: 2, Vegetables: 2, Dairy: 1 }


// let fruits;

// console.log( typeof fruits);
