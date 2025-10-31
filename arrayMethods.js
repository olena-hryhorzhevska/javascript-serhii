// // MAP

// const prices = [10, 20, 30];
// const newPrices = prices.map(price => {
//   return price * 1.1
// });
// console.log(newPrices);


// // FILTER
// const ages = [15, 32, 45, 12, 76];
// const adults = ages.filter(age => age >= 18);
// console.log(adults);




// // FIND (находит первого, который соответствует условию и отдает его)
// const users = [
//   {
//     name: 'Anna',
//     age: 18,
//   },
//   {
//     name: 'Dima',
//     age: 25,
//   },
//   {
//     name: 'Ksusha',
//     age: 15,
//   },
// ];

// const firstAdult = users.find(user => { return user.age >= 18 });
// console.log(firstAdult);




// // forEach

// const fruits = ['apple', 'banana', 'orange'];
// fruits.forEach(fruit => console.log('🍁', fruit))


// // SOME(), EVERY()

// const nums = [2, 4, 6, 9];
// console.log(nums.some(num => num > 5));
// console.log(nums.every(num => num % 2 === 0));


// // REDUCE()

// const numbers1 = [5, 10, 15];
// const total = numbers1.reduce((sum, num) => sum + num,);
// console.log(total);



// // SORT()

// const numbers = [15, 34, 12, 67];
// const sortedNumbers = [...numbers].sort((a, b) => a - b); // asc order
// console.log(sortedNumbers);

// const fruits2 = ['banana', 'Apple', 'kiwi', 'cherry'];
// const sortedFruits = [...fruits2].sort((a, b) => b.toLowerCase().localeCompare(a.toLowerCase()))
// console.log(sortedFruits);




// // SPLIT()
// // string.split(separator);

// const sentence = 'JavaScript - is - fun'
// const words = sentence.split(' - ');
// console.log(words);


// const email = 'serhii@gmail.com'
// const parts = email.split('@');
// console.log(parts);


// // JOIN()
// // array.join(separator);


// const words2 = ['JavaScript', 'is', 'fun']
// const sentence2 = words2.join(' ');
// console.log(sentence2);


// const digits = ['123', '456', '789'];
// const phone = digits.join('-');
// console.log(phone);





// function groupByLength(worlds) {
//   let res = {}
//   for (let i = 0; i < worlds.length; i++)
//   {
//     let length = worlds[i].length
//     if (!res[length]) { res[length] = [] } res[length].push(worlds[i])
//   } return res
// }
// console.log(groupByLength(["cat", "apple", "dog", "pear", "hi"]));



