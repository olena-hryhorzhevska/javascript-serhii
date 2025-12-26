// const data = fetchData();
// console.log(data);



// Promise live cycle
// Pending -> Fulfilled or Rejected
// settled 


// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Data fetched successfully');
//   }, 2000);
// })

// console.log('Сразу после создания промиса', promise);

// setTimeout(() => {
//   console.log('Через 3 секунды после создания промиса', promise);
// }, 3000);



// const errorPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('Ошибка при получении данных');
//   }, 2000);
// })

// console.log('Сразу после создания промиса', errorPromise); // Pending

// setTimeout(() => {
//   console.log('Через 3 секунды после создания промиса', errorPromise); // Rejected
// }, 3000);



// const promise = new Promise((resolve, reject) => {
  
// })

// resolve(value) - успешное выполнение
// reject(reason) - ошибка выполнения



// const isSuccess = true;
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve('Data fetched successfully');
//     } else {
//       reject('Ошибка при получении данных');
//     }
//   }, 2000);
// })

// console.log('Сразу после создания промиса', promise); // Pending


// then - catch - finally
// then - для обработки успешного выполнения

// const promise = new Promise((resolve, reject) => {
//   resolve(10);
// })

// console.log(promise); // Fullfiled Promise


// promise.then(value => {
//   console.log('Promise fulfilled with value:', value);
//   return value * 2;
// })
//   .then(value => {
//   console.log('Второй then:', value);
// })


// catch - для обработки ошибки

// const isSuccess = false;
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve('Data fetched successfully');
//     } else {
//       reject('Ошибка при получении данных');
//     }
//   }, 2000)
// })

// promise.then(value => {
//   console.log('Promise fulfilled with value:', value);
// })
//   .catch(error => {
//   console.log('Promise rejected with reason:', error);
// })


// finally - для выполнения кода в любом случае

// const isSuccess = false;
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve('Data fetched successfully');
//     } else {
//       reject('Ошибка при получении данных');
//     }
//   }, 2000)
// })

// promise.then(value => {
//   console.log('Promise fulfilled with value:', value);
// })
//   .catch(error => {
//   console.log('Promise rejected with reason:', error);
//   })
//   .finally(() => {
//   console.log('Promise settled (either fulfilled or rejected)');
// })


// Цепочки промисов
// Promise.resolve("start")
//   .then((value) => {
//   console.log('Первый then:', value);
//     return 'step 2';
//   })
//   .then((value) => {
//   console.log('Второй then:', value);
//     throw new Error('Ошибка на втором шаге');
//   })
//   .then((value) => {
//     console.log('Третий then:', value);
//   })
//   .catch((error) => {
//     console.log('Обработка ошибки:', error.message);
//   })



// ❗️Промисификация функций с колбэками
// function delayCallback(ms, callback) {
//   setTimeout(() => {
//     callback(`Задержка ${ms}мс завершена`);
//   }, ms);
// }

// delayCallback(2000, (message) => {
//   console.log(message);
// });


// function delayPromise(ms) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`Задержка ${ms}мс завершена`);
//     }, ms);
//   })
// }

// delayPromise(2000)
//   .then(message => console.log(message));


// Promise.resolve('Успешное значение')
//   .then(value => {
//   console.log('Первый then:', value);
//   })
//   .catch(error => {
//   console.log('Обработка ошибки:', error);
//   })


//   Promise.reject('Ошибка выполнения')
//     .then(value => {
//       console.log('Первый then:', value);
//     })
//     .catch(error => {
//       console.log('Обработка ошибки:', error);
//     });


// Промисификация синхронных функций

// const makeGreeting = (name, onSuccess, onError) => {
//   if (!name) {
//     onError('Имя не предоставлено');
//   }
//     else {
//     onSuccess(`Привет, ${name}!`);
//     }
// }
  
// makeGreeting('',
//   greeting => console.log(greeting),
//   error => console.log('Ошибка:', error)
// )


// const makeGreetingPromise = (name) => {
//   return new Promise((resolve, reject) => {
//     if (!name) {
//       reject('Имя не предоставлено');
//     } else {
//       resolve(`Привет, ${name}!`);
//     }
//   });
// }

// makeGreetingPromise('')
//   .then(greeting => console.log(greeting))
//   .catch(error => console.log('Ошибка:', error));