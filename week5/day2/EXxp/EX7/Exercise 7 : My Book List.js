
const allBooks = [
    {
        title: "Mary",
        author: "Vladimir Nabokov",
        image: "mary.jpg",
        alreadyRead: true
    },
    {
        title: 'All Quiet on the Western Front',
        author: "Erich Maria Remarque",
        image:"all_quiet.jpg",
        alreadyRead: false
    }
];


function renderBooks() {
    const listBooksSection = document.querySelector('.listBooks');

    allBooks.forEach(book => {
        const bookDiv = document.createElement('div');
        const titleParagraph = document.createElement('p');
        const authorParagraph = document.createElement('p');
        const imageElement = document.createElement('img');

        titleParagraph.textContent = book.title;
        authorParagraph.textContent = `Written by ${book.author}`;
        imageElement.src = book.image;
        imageElement.style.width = '100px';

       
        if (book.alreadyRead) {
            titleParagraph.style.color = 'red';
            authorParagraph.style.color = 'red';
        }

        bookDiv.appendChild(titleParagraph);
        bookDiv.appendChild(authorParagraph);
        bookDiv.appendChild(imageElement);

        listBooksSection.appendChild(bookDiv);
    });
}


renderBooks();
