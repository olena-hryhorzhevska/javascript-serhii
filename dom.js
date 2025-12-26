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

// ❗️Closest(selector)

// const list = document.querySelector('.todo-list');

// list.addEventListener('click', (event) => {
//   if (event.target.matches('.delete-btn')) {
//     const item = event.target.closest('.todo-item');
//     item.remove();
//   }
// })

// ❗️:nth-child(n)

// const evenItems = document.querySelectorAll('li:nth-child(2)');
// evenItems.forEach(item => {
//   item.style.backgroundColor = 'lightgray';
// })

// const buttons = document.querySelectorAll('#filters button');
// const products1 = document.querySelectorAll('.item');

// buttons.forEach(btn => {
//   btn.addEventListener('click', () => {
//     const buttonValue = btn.dataset.filter;

//     buttons.forEach(b => {
//       b.classList.remove('active');
//     });

//     products1.forEach(product => {
//       const productValue = product.dataset.type;

//       if (buttonValue === 'all') {
//         product.style.display = 'block';
//       } else if (buttonValue === productValue) {
//         product.style.display = 'block';
//       } else {
//         product.style.display = 'none';
//       }
//     });

//     btn.classList.add('active');
//   });
// });

// const parent = document.getElementById('parent');
// const child = document.getElementById('child');
// const descendant = document.getElementById('descendant');

// parent.addEventListener('click', event => {
//   console.log('Parent clicked');
// });

// child.addEventListener('click', (event) => {
//   console.log('Child clicked');
// });

// descendant.addEventListener('click', (event) => {
//   console.log('Descendant clicked');
//     console.log('target:', event.target);
//     console.log('Current target:', event.currentTarget);
// });

// event.stopPropagation();
// event.stopImmediatePropagation();


// ❗️БЕЗ stopPropagation

// const card = document.getElementById('card');
// const button = document.getElementById('delete');

// card.addEventListener('click', () => {
//   console.log("Open card");
// })

// button.addEventListener('click', ( ) => {
//   console.log('First item');
// })

// button.addEventListener('click', (event) => {
//   event.stopImmediatePropagation()
//   console.log('Second item');
// });

// button.addEventListener('click', (event) => {
//   console.log('Third item');
// });



// const user = {
//   name: 'Alice',
//   age: 30,
// }

// const { name: surname, age } = user;
// console.log(surname);
// console.log(age)

// const book = {
//   title: 'JavaScript Basics',
// }

// const { title, author = 'Unknown' } = book;
// console.log(title);
// console.log(author);



// const rgb = [255, 0, 127];
// const [r, g, b] = rgb;
// console.log(r, g, b);

// const arr = [10, 20, 30, 40];
// const [first, , third] = arr;
// console.log(first, third);

// const arr1 = [1];
// const [a, f = 99] = arr1;
// console.log(a, f);

// const nums = [5, 10, 15, 20];
// const [firstNum, ...restNums] = nums;
// console.log(firstNum, restNums);


// const user = {
//   name: "Alex",
//   age: 25,
//   city: "New York",
//   role: 'admin',
// }


// const { name, age, ...rest } = user;
// console.log(name, age);
// console.log(rest);



// const user = {
//   name: "Alex",
//   stats: {
//     followers: 100,
//     views: 2000,
//     likes: 500,
//   }
// }

// const { name, stats: { followers, views, likes } } = user;

// console.log(name);
// // console.log(stats); // ❌ ReferenceError: stats is not defined
// console.log(followers, likes, views);






//NEW
//✅ Task 1 ТЗ 
//Есть вкладки. Нужно: 1. Повесить один обработчик на .tabs. 
//2. При клике на .tab: • активной становится кликнутая вкладка (.active) • показывается соответствующий контент по data-tab (остальные скрыть) 
//3. Клик по пустому месту внутри .tabs — ничего не делает (проверка target). <section> <div class="tabs" id="tabs"> <button class="tab active" data-tab="home" type="button">Home</button> <button class="tab" data-tab="about" type="button">About</button>
//  <button class="tab" data-tab="contact" type="button">Contact</button> </div> <div class="panels"> <div class="panel" data-panel="home">
// 🏠 Home content</div> <div class="panel hidden" data-panel="about">ℹ️ About content</div> <div class="panel hidden" data-panel="contact">📩 Contact content</div> </div> </section>
// <style> .tabs { display: flex; gap: 8px; padding: 8px; border: 1px solid #999; border-radius: 10px; } 
// .tab.active { font-weight: 700; border-bottom: 3px solid #222; } .hidden { display: none; } 
// .panel { margin-top: 10px; padding: 10px; border: 1px solid #ddd; border-radius: 10px; } </style>


  // const tabs = document.getElementById('tabs')
  // const panels = document.querySelectorAll('.panel')

  // tabs.addEventListener('click', (e) => {
  //   if (!e.target.classList.contains('tab')) return

  //   const tab = e.target
  //   const tabName = tab.dataset.tab

  //   document.querySelectorAll('.tab').forEach(t =>
  //     t.classList.remove('active')
  //   )
  //   tab.classList.add('active')

  //   panels.forEach(panel => {
  //     panel.classList.toggle(
  //       'hidden',
  //       panel.dataset.panel !== tabName
  //     )
  //   })
  // })


  
  //✅ Task 2 Нужно сделать мини todo: 
  //1. Кнопка Add добавляет задачу в список (li с текстом + кнопки Done и Delete). 
  //2. На список повесить один обработчик кликов. 
  //3. Done переключает класс done у li. 
  //4. Delete удаляет li. 
  //5. Клик по самому li выводит в консоль Open task: ... (но клики по Done/Delete не должны открывать). <section> <input id="todoInput" placeholder="New task..." /> <button id="addTodo" type="button">Add</button> <ul id="todoList"></ul> </section><style> #todoList { margin-top: 10px; padding-left: 16px; } .done { text-decoration: line-through; opacity: 0.6; } .actions { margin-left: 10px; } </style>
  

  // const input = document.getElementById('todoInput')
  // const addBtn = document.getElementById('addTodo')
  // const list = document.getElementById('todoList')

  // addBtn.addEventListener('click', () => {
  //   const text = input.value.trim()
  //   if (!text) return

  //   const li = document.createElement('li')
  //   li.innerHTML = `
  //     <span class="text">${text}</span>
  //     <span class="actions">
  //       <button data-action="done">Done</button>
  //       <button data-action="delete">Delete</button>
  //     </span>
  //   `
  //   list.appendChild(li)
  //   input.value = ''
  // })

  // list.addEventListener('click', (e) => {
  //   const li = e.target.closest('li')
  //   if (!li) return

  //   const action = e.target.dataset.action

  //   if (action === 'done') {
  //     li.classList.toggle('done')
  //     return
  //   }

  //   if (action === 'delete') {
  //     li.remove()
  //     return
  //   }

  //   if (!action) {
  //     const text = li.querySelector('.text').textContent
  //     console.log('Open task:', text)
  //   }
  // })







