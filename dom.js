// EcmaScript ES6
// DOM - Document Object Model
// BOM - Browser Object Model (window, location, history, navigator)

// tag = element node (узлы элементов)
// text = text node (текстовые узлы)


// console.log(document);

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







// textContent 

// const hello = document.querySelector('.parag');
// console.log(hello);
// console.log(hello.textContent);



// Atributes

// const img = document.querySelector('.photoclass');
// console.log(img);
// console.log(img.hasAttribute('src')) // true
// console.log(img.getAttribute('alt')) // Profile photo
// img.setAttribute('alt', "New Profile")
// console.log(img.getAttribute('alt'));
// img.removeAttribute('alt')
// console.log(img.hasAttribute('alt'));



// Data-action

// const btn = document.querySelector('.savebtn');
// console.log(btn.dataset.action);
// btn.dataset.action = 'update'
// console.log(btn.dataset.action);
// btn.dataset.role = 'admin'
// console.log(btn.dataset.role);



// TextContent AND InnerHTML

// const box = document.getElementById('box')
// console.log(box);

// box.textContent = "<b>Hi</b>"
// console.log(box);


// box.innerHTML = '<b>Hi</b>';


// const btn = document.getElementById('update');
// const items = document.querySelectorAll('#list li');
// btn.addEventListener('click', () => {
//   items.forEach(li => li.textContent = 'Updated')
// })




// ❗️Checked - не текст, а true or false

// const agree = document.getElementById('agree');
// const log = document.getElementById('log');

// agree.addEventListener('change', () => {
//   log.textContent = agree.checked ? "Checked" : "Not checked"
// })


// Делегирование событий
// const list = document.getElementById('list');
// const log = document.getElementById('log');

// list.addEventListener("click", (event) => {
//   console.log(event.target);
  
//   if (event.target.classList.contains('item')) {
//     log.textContent = "Clicked " + event.target.textContent
//   }
// })



// ❗️ParentElement

// const btn = document.getElementById('btn');
// const parent = btn.parentElement
// console.log(parent);


// ❗️Children

// const menu = document.getElementById('menu');
// console.log(menu.children);
// console.log(menu.children[1].textContent);


// ❗️Siblings

// const second = document.getElementById('second');

// console.log(second.previousElementSibling.textContent);
// console.log(second.nextElementSibling.textContent);


// const third = document.getElementById('third');
// console.log(third.nextElementSibling.textContent);


// ❗️insertAdjacentHTML()

// beforebegin - перед элементом
// afterbegin - внутрь в начало
// beforeend - внутрь в конец
// afterend - после элемента


// const menu = document.getElementById('menu')
// menu.insertAdjacentHTML('beforeend', "<li>About</li>")
// menu.insertAdjacentHTML('afterbegin', '<li>Start</li>');
// menu.insertAdjacentHTML('afterend', '<p>Menu ended</p>');


// ❗️createElement() + append / prepend / before / after

// menu.innerHTML += '<li>About</li>';

// const li = document.createElement('li');
// const li2 = document.createElement('li');
// li2.textContent = "textContent";
// li.textContent = "Created with create element"
// menu.appendChild(li, li2) ❌

// menu.append(li1, li2, 'Text node'); ✅
// menu.append('Hello'); ✅

// menu.appendChild('Hello'); ❌


// menu.append(document.createElement('li'),
//   document.createElement('li'),
// 'Some text')



// element.addEventListener(event, handler, options (capture, once, passive))
// removeEventListener(event, handler, options)


// ❌

// button.addEventListener('click', () => {
//   console.log('Clicked');
// });

// button.removeEventListener('click', handler); // ❌ не сработает, т.к. функция анонимная



// Keydown, Keyup, key vs code (event.key, event.code)
// KeyA
// Digit1
// Enter
// ArrowUp


// const keySpan = document.getElementById('key');
// const codeSpan = document.getElementById('code');

// document.addEventListener('keydown', (event) => {
//   console.log("keydown event:", event);
//   keySpan.textContent = event.key;
//   codeSpan.textContent = event.code;
// })



// ❗️Form Events - submit, change, input
// const loginForm = document.getElementById('login-form');

// loginForm.addEventListener("submit", (event) => {
//   event.preventDefault(); // отменяет стандартное поведение браузера

//   const form = event.target;
//   const login = form.elements.login.value;
//   const password = form.elements.password.value;

//   console.log(`Login: ${login}, Password: ${password}`);
  
// })


// ❗️Change Event

// const select = document.querySelector('.pizza-select');
// const textOutput = document.querySelector('.text-output');
// const valueOutput = document.querySelector('.value-output');

// select.addEventListener('change', (event) => {


  
//   const selectedOption = event.currentTarget.value;
//   const selectedOptionIndex = event.currentTarget.selectedIndex; 
//   const selectedOptionText = event.currentTarget.options[selectedOptionIndex].text;

//   textOutput.textContent = selectedOptionText;
//   valueOutput.textContent = selectedOption;

//   console.log(event.currentTarget.value); // pepperoni (то, что было выбрано и прописано в value)

// })


// ❗️Input Event

// const bio = document.getElementById('bio');
// const count = document.getElementById('count');

// bio.addEventListener('input', (event) => {
//   const length = bio.value.length
//   count.textContent = length;
// })


// ❗️Focus and Blur Events
// const input = document.getElementById('name');

// input.addEventListener('focus', () => {
//   console.log('Input focused');
//   input.style.backgroundColor = 'lightyellow';
// })

// input.addEventListener('blur', () => {
//   console.log('Input blurred');
//   input.style.backgroundColor = '';
// })

// ❗️Focusin and Focusout

// const form = document.getElementById('login-form');

// form.addEventListener('focusin', (event) => {
//   console.log('Focusin event on:', event.target);
//   event.target.style.backgroundColor = 'lightblue';
// })

// form.addEventListener('focusout', (event) => {
//   console.log('Focusout event on:', event.target);
//   event.target.style.backgroundColor = '';
// })




// ❗️Load Event
// window.addEventListener('load', () => {
//   console.log('All resources finished loading!');
// })



// ❗️Resize Event
// window.addEventListener('resize', () => {
//   console.log(`Window resized to ${window.innerWidth} x ${window.innerHeight}`);
// })


// ❗️Scroll Event
// window.addEventListener('scroll', () => {
//   console.log(`Scrolled to ${window.scrollY}px vertically`);
// })


// ❗️Mouse Events
// const btn = document.getElementById('btn');

// btn.addEventListener('mousedown', (event) => {
//   console.log('Mousedown:', event.button);
// })

// btn.addEventListener('mouseup', (event) => {
//   console.log('Mouseup:', event.button);
// })


// ❗️Mousemove
// const area = document.getElementById('area');
// const coords = document.getElementById('coords');

// area.addEventListener('mousemove', (event) => {
//   coords.textContent = `X: ${event.clientX}, Y: ${event.clientY}`;
// })



// ❗️MouseEnter and MouseLeave - всплытие не происходит

// const card = document.getElementById('card');

// card.addEventListener('mouseenter', () => {
//   card.style.backgroundColor = 'lightgray';
//   console.log('Курсор вошел в область карточки');
// })

// card.addEventListener('mouseleave', () => {
//   card.style.backgroundColor = '';
//   console.log('Курсор покинул область карточки');
// }
// )


// const box = document.getElementById('box');
// box.addEventListener('mouseenter', () => {
//   box.style.backgroundColor = 'lightgreen';
//   console.log('Курсор вошел в область бокса');
// })

// box.addEventListener('mouseleave', () => {
//   box.style.backgroundColor = '';
//   console.log('Курсор покинул область бокса');
// })

// ❗️MouseOver and MouseOut - всплытие происходит

// const container = document.getElementById('container');

// container.addEventListener('mouseover', (event) => {
//   console.log('Mouseover on:', event.target.id);  
// })

// container.addEventListener('mouseout', (event) => {
//   console.log('Mouseout from:', event.target.id, 'relatedTarget: ', event.relatedTarget.id);
// })