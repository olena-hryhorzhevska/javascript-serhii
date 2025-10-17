// WHILE

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

let clients = 18;
const maxClients = 25;

while (clients < maxClients) {
  console.log('Client number:', clients);
  clients++;
}

// DO...WHILE

// let count = 4;
// do {
//   console.log(count);
//   ++count;
// } while (count <= 3);

// let n = 56;
// let n2 = n++;
// console.log(n);
// console.log(n2);


// let n1 = 56;
// let n3 = ++n1;
// console.log(n1);
// console.log(n3);



// let x = 10;
// do {
//   console.log('x=', x);
//   x++
// } while (x < 5)




// FOR
  
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }


// for (let i = 0; i <= 10; i += 2) {
//   console.log(i);
// }


// BREAK

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     break;
//   }
//   console.log(i);
// }

const nums4 = [4, 7, -2, -6]; // 4
let index = 0;

while (index < nums4.length) {

  if (nums4[index] < 0) {
    break;
  }
  console.log(nums4[index]);
  index++;
}

