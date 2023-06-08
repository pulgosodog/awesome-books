let bookLibrary = {};
let jsonBooks = JSON.parse(localStorage.getItem('books'));
document.addEventListener('DOMContentLoaded', () => {
  if (jsonBooks) {
    bookLibrary = jsonBooks;
    Object.entries(bookLibrary).forEach(([key, value]) => {
      const { tittle, author } = value;
      insertBookHtml(tittle, author);
    });
  };
})

function addBook(tittle, author) {
  bookLibrary[tittle] = {
    tittle: tittle,
    author: author
  };
  let jsonBooks = JSON.stringify(bookLibrary);
  localStorage.setItem('books', jsonBooks);
};

function removeBook(bookName) {
  delete bookLibrary[`${bookName}`];
  jsonBooks = JSON.stringify(bookLibrary);
  localStorage.setItem('books', jsonBooks);
};

const bookSection = document.querySelector('#library');  
function insertBookHtml(tittle, author)  {
  const div = document.createElement('div');
  const tittelName = document.createElement('h2');
  const authorName = document.createElement('h2');
  const button = document.createElement('button');
  const hr = document.createElement('hr');

  tittelName.textContent = `${tittle}`;
  authorName.textContent = `${author}`;
  button.textContent = 'Remove';

  button.addEventListener('click', () => {
    div.remove();
    removeBook(tittle);
  });

  div.appendChild(tittelName);
  div.appendChild(authorName);
  div.appendChild(button);
  div.appendChild(hr);
  bookSection.appendChild(div);
};

const form = document.querySelector('form');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let title = document.querySelector('#tittle-name').value;
  let author = document.querySelector('#author-name').value;
  addBook(title, author);
  insertBookHtml(title, author);
  document.querySelector('#tittle-name').value = '';
  document.querySelector('#author-name').value = '';
});
