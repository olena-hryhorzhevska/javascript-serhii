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

// Работа с несколькими промисами
// Promise.all, Promise.allSettled, Promise.race

// ❗️Promise.all
// Promise.all([promise1, promise2, promise3])
// на выходе массив со значениями всех выполненных промисов и если хоть один упал, то статус всего промиса будет rejected

// const p1 = Promise.resolve('Первый промис выполнен');
// const p2 = Promise.resolve('Второй промис выполнен');
// const p3 = Promise.resolve('Третий промис выполнен');

// // p1.then(value => console.log(value));

// Promise.all([p1, p2, p3])
//   .then(value => {
//   console.log('Все промисы выполнены:', value);
//   })
//   .catch(error => {
//   console.log('Один из промисов отклонен:', error);
// })

// const p1 = Promise.resolve('Первый промис выполнен');
// const p2 = Promise.reject('Второй промис отклонен');
// const p3 = Promise.resolve('Третий промис выполнен');

// Promise.all([p1, p2, p3])
//   .then(value => {
//   console.log('Все промисы выполнены:', value);
//   })
//   .catch(error => {
//   console.log('Один из промисов отклонен:', error);
//   })

// ❗️Promise.allSettled
// Promise.allSettled([promise1, promise2, promise3])
// на выходе массив со статусами и значениями/причинами отклонения и статус промиса fulfilled|

// const p1 = Promise.resolve('Первый промис выполнен');
// const p2 = Promise.reject('Второй промис отклонен');
// const p3 = Promise.resolve('Третий промис выполнен');

// Promise.allSettled([p1, p2, p3])
//   .then(results => {
//   console.log('Результаты всех промисов:', results);
// })

// Promise.allSettled([p1, p2, p3])
//   .then(results => {
//     const success = results.filter(item => item.status === 'fulfilled')
//       .map(item => item.value);
//     console.log('Успешные результаты:', success);

// })

// ❗️Promise.race()
// Promise.race([promise1, promise2, promise3])
// возвращает результат первого выполненного или отклоненного промиса из переданного массива промисов

// const p1 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve('1');
//   }, 2000);
// })

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('2');
//   }, 1000);
// })

// Promise.race([p1, p2])
//   .then(value => {
//   console.log('Первый выполненный промис:', value);
//   })
//   .catch(error => {
//   console.log('Один из промисов отклонен:', error);
// })



