// EcmaScript ES6
// DOM - Document Object Model
// BOM - Browser Object Model (window, location, history, navigator)

// tag = element node (узлы элементов)
// text = text node (текстовые узлы)


console.log(document);

// ❗️Query Selector

// const menu = document.querySelector('ul')
// const menu = document.querySelector('#menu');
// const menu = document.querySelector('.menu2');
// const menu = document.querySelector('menu2') // null 
// console.log(menu);



// ❗️Query Selector All
// const menuItems = document.querySelectorAll('.menu2 li');
// menuItems.forEach(item => {
//   console.log(item);
// })
// console.log(menuItems);




// ClassList

// const link = document.querySelector('.link');
// console.log(link.classList);
// console.log(link.classList.contains('link')); // true
// console.log(link.classList.contains('is-active')); // true
// console.log(link.classList.contains('hello')); // false

// link.classList.add('hello');
// console.log(link.classList);
// console.log(link.classList.contains('hello')); // true


// link.classList.remove('is-active');
// console.log(link.classList);
// console.log(link.classList.contains('is-active')); // false


// // Toggle (ксли класса нет - добавит, если есть - удалит)
// link.classList.toggle('is-active');
// console.log(link.classList);


// // Replace (заменяет один класс на другой)
// link.classList.replace('hello', 'new-class');
// console.log(link.classList);





// const link = document.querySelector('.link');
// link.style.color = 'red';
// link.style.fontSize = '24px';
// link.style.backgroundColor = 'yellow';
// link.style.marginTop = '30px';

// const menu = document.getElementById('menu');
// menu.style.backgroundColor = 'lightblue';
// menu.style.margin = '20px';
// menu.style.padding = '10px';

// // camelCase



// const button = document.querySelector('.btn');

// button.addEventListener('click', () => {
//   button.classList.toggle('open');
//   if (button.classList.contains('open')) {
//     button.style.backgroundColor = 'green';
//     button.textContent = 'Close';
//     button.style.color = 'white';
//     button.style.border = '2px solid darkgreen';
//   }
//   else {
//     button.style.backgroundColor = 'blue';
//     button.textContent = 'Open';
//     button.style.color = 'white';
//     button.style.border = '2px solid darkred';
//   }
// })
