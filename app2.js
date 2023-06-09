let jsonBooks = JSON.parse(localStorage.getItem('booksStorage'));

class bookLibrary {
    constructor() {
        this.books = {};
    }

    addBook(tittleName, authorName) {
        this.books[tittleName] = {
            tittle: tittleName,
            author: authorName,
        };
        jsonBooks = JSON.stringify(this.books);
        localStorage.setItem('booksStorage', jsonBooks);
    }

    removeBook(bookName) {
        delete books[`${bookName}`];
        jsonBooks = JSON.stringify(this.books);
        localStorage.setItem('booksStorage', jsonBooks);
    }

    insertBookHtml() {
        const div = document.createElement('div');
        const tittelName = document.createElement('h2');
        const authorName = document.createElement('h2');
        const button = document.createElement('button');
        const hr = document.createElement('hr');

        tittelName.textContent = `${this.tittle}`;
        authorName.textContent = `${this.author}`;
        button.textContent = 'Remove';

        button.addEventListener('click', () => {
            div.remove();
            removeBook(this.tittle);
        });

        div.appendChild(tittelName);
        div.appendChild(authorName);
        div.appendChild(button);
        div.appendChild(hr);
        bookSection.appendChild(div);
    }
}

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = document.querySelector('#tittle-name').value;
  const author = document.querySelector('#author-name').value;
  bookLibrary.addBook(title, author);
  eval(title).insertBookHtml();
  document.querySelector('#tittle-name').value = '';
  document.querySelector('#author-name').value = '';
});

document.addEventListener('DOMContentLoaded', () => {
  if (jsonBooks) {
    bookLibrary.getBooks() = jsonBooks;
    Object.entries(bookLibrary.getBooks()).forEach(([, value]) => {
      const { tittle, author } = value;
      insertBookHtml(tittle, author);
    });
  }
});
