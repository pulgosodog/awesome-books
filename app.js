let bookLibrary = {};
let jsonBooks = JSON.parse(localStorage.getItem('books'));

function addBook(tittleName, authorName) {
  bookLibrary[tittleName] = {
    tittle: tittleName,
    author: authorName,
  };
  const jsonBooks = JSON.stringify(bookLibrary);
  localStorage.setItem('books', jsonBooks);
}

function removeBook(bookName) {
  delete bookLibrary[`${bookName}`];
  jsonBooks = JSON.stringify(bookLibrary);
  localStorage.setItem('books', jsonBooks);
}

const bookSection = document.querySelector('#library');

function insertBookHtml(tittle, author) {
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
}

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = document.querySelector('#tittle-name').value;
  const author = document.querySelector('#author-name').value;
  addBook(title, author);
  insertBookHtml(title, author);
  document.querySelector('#tittle-name').value = '';
  document.querySelector('#author-name').value = '';
});

document.addEventListener('DOMContentLoaded', () => {
  if (jsonBooks) {
    bookLibrary = jsonBooks;
    Object.entries(bookLibrary).forEach(([, value]) => {
      const { tittle, author } = value;
      insertBookHtml(tittle, author);
    });
  }
});