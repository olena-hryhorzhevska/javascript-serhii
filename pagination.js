// Pagination

// 1) Сколько элементов будет на странице (_limit, per_page, count)
// https://jsonplaceholder.typicode.com/posts?_limit=5

// 2) Какая страница сейчас (_page, offset)
//https://jsonplaceholder.typicode.com/posts?_limit=5&_page=3

// _limit = 5 (по 5 элементов на страницу)
// _page = 1 (элементы с 1 по 5)
// _page = 2 (элементы с 6 по 10)
// _page = 3 (элементы с 11 по 15)

// const fetchPosts1 = async () => {
//   const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5');
//   console.log(response.data);
// }

// fetchPosts1()

// const fetchPosts2 = async () => {
//   const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5&_page=3');
//   console.log(response.data);
// };

// fetchPosts2();

// let page = 1;
// const limit = 10;

// async function fetchPosts() {
//   const url = `https://jsonplaceholder.typicode.com/posts`;
//   const response = await axios.get(url, {
//     params: {
//       _limit: limit,
//       _page: page
//     }
//   })
//   const posts = response.data;
//   console.log('Page:', page);
//   console.log('Posts:', posts);
//   page += 1;
//   return posts;
// }

// fetchPosts()
// fetchPosts();
// fetchPosts();

// totalPages = Math.ceil(totalItems / limit);

// Стили пагинации
// Page-based Pagination - _page=3&_limit=10
// Offset-based Pagination - _start=20&_limit=10
// offset = (page - 1) * limit

//page = 3, limit = 10; offset = (3-1) *10 = 20

const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const pageInfo = document.getElementById('pageInfo');
const countInfo = document.getElementById('countInfo');
const postsList = document.getElementById('postsList');
const loadMoreBtn = document.getElementById('loadMoreBtn');
let page = 1;
const limit = 6;
let query = '';
let allPosts = [];
let filteredPosts = [];

async function fetchAllPosts() {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return res.data;
}

function renderPosts(posts) {
  posts.map(post => {
    const li = document.createElement('li');
    li.classList.add('list-item');
    li.innerHTML = `
<h3>${post.title}</h3>
<p>${post.body}</p>
`;
    postsList.appendChild(li);
    const totalLoaded = postsList.children.length;
    pageInfo.textContent = `Page: ${page}`;
    countInfo.textContent = `Loaded: ${totalLoaded} posts`;
  });
}

function searchPosts(posts, query) {
  if (!query) {
    return posts;
  }
  return posts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()));
}

function getSourceArray() {
  return query.trim() ? filteredPosts : allPosts;
}

function renderNextPage() {
  const source = getSourceArray();

  const start = (page - 1) * limit;
  const end = start + limit;
  const chunk = source.slice(start, end);

  if (chunk.length === 0) {
    loadMoreBtn.disabled = true;
    loadMoreBtn.textContent = 'No more posts';
    return;
  }
  renderPosts(chunk);
  page += 1;
}

loadMoreBtn.addEventListener('click', async () => {
  if (allPosts.length === 0) {
    allPosts = await fetchAllPosts();
  }
  renderNextPage();
});

searchBtn.addEventListener('click', async () => {
  query = searchInput.value;
  if (allPosts.length === 0) {
    allPosts = await fetchAllPosts();
  }
  filteredPosts = searchPosts(allPosts, query);
  postsList.innerHTML = '';
  page = 1;
  loadMoreBtn.disabled = false;
  loadMoreBtn.textContent = 'Load more';
  renderNextPage();
});
