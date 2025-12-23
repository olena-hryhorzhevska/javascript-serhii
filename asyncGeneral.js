// console.log("A");
// console.log('B');
// console.log('C');


// console.log("Start");
// for (let i = 0; i < 3; i++) {
//   console.log(i);
// };

// console.log("End");


// SetTimeout
// setTimeout(callback, delay)

// console.log("First");
// setTimeout(() => {
//   console.log("Second");
// }, 2000);

// console.log("Third");



// setTimeout(() => {
//   console.log('Second');
// }, 0);

// console.log('Third');



// const id = setTimeout(() => {
//   console.log('Hello after 3 seconds');
// }, 3000);

// console.log(id);



// let timeoutId = null;
// function start() {
//   timeoutId = setTimeout(() => {
//     console.log('Hello after 3 seconds');
//     timeoutId = null;
//   }, 3000);
// }

// function cancel() {
//   if (timeoutId !== null) {
//     clearTimeout(timeoutId);
//     timeoutId = null;
//     console.log('Canceled');
//   }
// }

// start();
// setTimeout(cancel, 3000);


// setInterval
// setInterval(callback, interval)


// let count = 0;
// const intervalId = setInterval(() => {
//   count++;
//   console.log(count);
//   if (count === 5) {
//     clearInterval(intervalId);
//     console.log('Stopped');
//   }
// }, 1000);


// // Date and Time

// const now = new Date();
// console.log(now);
// console.log(typeof now);

// // now.toString()

// const day = new Date();
// console.log(day.getTime());
// console.log(Date.now());

// const specificDate = new Date('2030-03-15');
// console.log(specificDate);
// const specificDateTime = new Date('2030-03-15T10:30:00');
// console.log(specificDateTime);


// const date = new Date(2030, 2, 15, 10, 30, 0); // Month is 0-indexed
// console.log(date);



// const date = new Date('2023-06-15T12:00:00');
// console.log(date.getFullYear());
// console.log(date.getMonth()); // 0-indexed
// console.log(date.getDate());
// console.log(date.getHours());
// console.log(date.getDay());

// const d = new Date();
// console.log(d); // Now

// d.setFullYear(2040);
// d.setMonth(5);
// d.setDate(20);
// console.log(d);




// const start = new Date("2025-12-01");
// const end = new Date("2025-12-25");

// const diff = end - start; // Difference in milliseconds
// console.log(diff);
// console.log(1000 * 60 * 60 * 24);
// const diffInDays = diff / (1000 * 60 * 60 * 24);
// console.log(`Days between: ${diffInDays}`);

