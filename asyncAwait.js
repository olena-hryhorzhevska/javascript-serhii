// Function declaration
// async function fetchData() {

// }

// Function expression
// const fetchData = async function () {

// }

// Arrow function
// const fetchData = async () => {

// }

// data();
// function data() {
//   console.log('Data fetched successfully');
// }

// data();
// const data = function () {
//   console.log('Data fetched successfully');
// }

// const data;
// console.log(data);

// const foo = async () => {
//   return 5; // Возвращает промис, который резолвится в 5 Promise.resolve(5)
// }

// foo().then(value => {
//   console.log(value); // 5
// });

// const foo = async () => {
//   console.log('Начало функции foo');
//   const promiseValue = await new Promise(resolve => {
//     setTimeout(() => {
//       resolve('Результат промиса из foo');
//     }, 2000);
//   })
//   console.log('После await в функции foo', promiseValue);
// }
// foo()

// ❗️TRY...CATCH

// try {

// } catch (error) {

// }

// try {
//   const response = await axios.get('/users')
//   console.log(response.data);
// }
// catch (error) {
//   console.log('Could not fetch users');
// }

// TASK

// 1.	Создай функцию fakeRequest(url), которая:
// 	•	возвращает промис,
// 	•	через случайное время (от 500 до 2000 мс) успешно resolve’ится строкой
// "Данные с ${url}" или
// иногда (например, 30% случаев) делает reject(new Error("Ошибка запроса")).
// Используй setTimeout.
// 	2.	Напиши асинхронную функцию loadUsers(), которая:
// 	•	вызывает fakeRequest("/users") с await,
// 	•	оборачивает запрос в try...catch,
// 	•	при успехе выводит в консоль: "Пользователи загружены:" и данные,
// 	•	при ошибке выводит: "Не удалось загрузить пользователей:"
// и текст ошибки.
// 	3.	Вызови loadUsers() несколько раз и посмотри, как работает
// обработка ошибок.

// const url = 'https://jsonplaceholder.typicode.com/users';
// const fakeRequest = url => {
//   return new Promise((resolve, reject) => {
//     const delay = Math.random() * 1500 + 500;
//     setTimeout(() => {
//       const fail = Math.random() < 0.3;
//       if (fail) {
//         reject(new Error(`Ошибка запроса к ${url}`));
//       } else {
//         resolve(`Данные получены с ${url}`);
//       }
//     }, delay);
//   });
// };

// async function loadUsers() {
//   try {
//     const data = await fakeRequest(url);
//     console.log('Пользователи загружены:', data);
//   } catch (error) {
//     console.log('Не удалось загрузить пользователей:', error.message);
//   }
// }

// loadUsers();
// loadUsers();
// loadUsers();
// loadUsers();
// loadUsers();