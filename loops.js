// // WHILE

// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

// let clients = 18;
// const maxClients = 25;

// while (clients < maxClients) {
//   console.log('Client number:', clients);
//   clients++;
// }

// // DO...WHILE

// // let count = 4;
// // do {
// //   console.log(count);
// //   ++count;
// // } while (count <= 3);

// // let n = 56;
// // let n2 = n++;
// // console.log(n);
// // console.log(n2);

// // let n1 = 56;
// // let n3 = ++n1;
// // console.log(n1);
// // console.log(n3);

// // let x = 10;
// // do {
// //   console.log('x=', x);
// //   x++
// // } while (x < 5)

// // FOR

// // for (let i = 0; i <= 10; i++) {
// //   console.log(i);
// // }

// // for (let i = 0; i <= 10; i += 2) {
// //   console.log(i);
// // }

// // BREAK

// // for (let i = 0; i < 10; i++) {
// //   if (i === 5) {
// //     break;
// //   }
// //   console.log(i);
// // }

// const nums4 = [4, 7, -2, -6]; // 4
// let index = 0;

// while (index < nums4.length) {

//   if (nums4[index] < 0) {
//     break;
//   }
//   console.log(nums4[index]);
//   index++;
// }

// FOR...OF
// const orders = [
//   {
//     id: 1,
//     total: 120,
//     status: 'completed',
//   },
//   {
//     id: 2,
//     total: 80,
//     status: 'pending',
//   },
//   {
//     id: 3,
//     total: 200,
//     status: 'completed',
//   },
//   {
//     id: 4,
//     total: 50,
//     status: 'canceled',
//   },
// ];

// let completedTotal = 0;

// for (const order of orders) {
//   if (order.status === 'completed') {
//     completedTotal += order.total;
//   }
// }
// console.log(`Total amount of completed orders: ${completedTotal}`);

// const user = {
//   name: 'Serhii',
// };

// const requiredFields = ['name', 'email', 'age'];
// let missing = [];

// for (const key of requiredFields) {
//   if (!(key in user)) {
//     missing.push(key);
//   }
// }

// if (missing.length > 0) {
//   console.log(`There is no field: ${missing.join(', ')}`);
// } else {
//   console.log('All necessary fields exist');
// }

// FOR...IN

// const user = {
//   name: 'Serhii',
//   email: 'serhii@gmail.com',
//   age: 25,
// }

// let hasEmpty = false;

// for (const key in user) {
//   if (user[key] === '' || user[key] === null || user[key] === undefined) {
//     console.log(`Поле ${key} не заполнено!`);
//     hasEmpty = true;
//   }
// }
// if (!hasEmpty) {
//   console.log('All the fields filled!');
// }

// 1 * 1 = 1
// 1 * 2 = 2
// 1 * 3 = 3
// 1 * 4 = 4
// 1 * 5 = 5
// 2 * 1 = 2
// 2 * 2 = 4
// 2 * 3 = 6
// 2 * 4 = 8
// 2 * 5 = 10

// for (let first = 1; first <= 5; first++) {
//   for (let second = 1; second <= 5; second++) {
//     console.log(`${first} X ${second} = ${first * second}`);
//   }
// }





// Reversed string (FOR LOOP)
// let str = 'JavaScript';
// let reversed = '';

// for (let i = str.length - 1; i >= 0; i--) {
//   reversed += str[i];
// }

// console.log(reversed);




// LOOP in a LOOP


// const aliceFood = ['pizza', 'potato', 'carrot', 'cake'];
// const tomFood = ['pizza', 'burger', 'sushi', 'cake'];

// for (let i = 0; i < aliceFood.length; i++) {
//   for (let j = 0; j < tomFood.length; j++) {
//     if (aliceFood[i] === tomFood[j]) {
//       console.log(`Оба любят: ${aliceFood[i]}`);
//     }
//   }
// }


