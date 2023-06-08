var bookLibrary = {};
var jsonBooks = JSON.parse(localStorage.getItem('books'))
document.addEventListener('DOMContentLoaded', () => {
    if (jsonBooks) {
        bookLibrary = jsonBooks;
        for(const property in bookLibrary) {
            let { tittle, author } = bookLibrary[property];
            insertBookHtml(tittle, author)
        }
    }
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

function insertBookHtml(tittle, author) {
    let div = document.createElement('div');
    let tittelName = document.createElement('h2');
    let authorName = document.createElement('h2');
    let button = document.createElement('button');
    let hr = document.createElement('hr');

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
