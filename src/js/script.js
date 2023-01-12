/* global Handlebars, utils, dataSource */ // eslint-disable-line no-unused-vars

{
  // ('use strict');

  const select = {
    templateOf: {
      books: '#template-book',
    },
    containerOf: {
      booksPannel: '.books-list',
    },
    bookImage: '.book__image',
  };

  const templates = {
    bookList: Handlebars.compile(
      document.querySelector(select.templateOf.books).innerHTML
    ),
  };

  const favoriteBooks = [];

  class BooksList {
    constructor() {
      const thisBookList = this;
      // console.log('bookList:', thisBookList);

      thisBookList.initData();
      thisBookList.renderBooks();
      thisBookList.getElemenst();
      thisBookList.initActions();
      // thisBookList.filerBooks();
      // thisBookList.determineRatingBgc();
    }

    initData() {
      const thisBookList = this;

      thisBookList.data = dataSource.books;
    }

    getElemenst() {
      // const thisBookList = this;
    }

    renderBooks() {
      const thisBookList = this;

      for (const book of dataSource.books) {
        // console.log('book:',book);
        /* [DONE] generate HTML based on template */
        const generateHTML = templates.bookList(book);
        // console.log('generateHTML:',generateHTML)

        /* [DONE]  create DOMelement using utils.createElementFromHTML */
        thisBookList.elementDOM = utils.createDOMFromHTML(generateHTML);
        // console.log('elementDOM:',elementDOM);

        /* [DONE] find menu container */
        const bookWrapper = document.querySelector(
          select.containerOf.booksPannel
        );
        // console.log('bookWrapper:',bookWrapper);

        /* [DONE] add element to bookList */
        bookWrapper.appendChild(thisBookList.elementDOM);
      }
    }

    initActions() {
      const thisBookList = this;

      const booksWrapper = thisBookList.elementDOM.querySelectorAll(select.bookImage);
      console.log(booksWrapper);

      for (let book of booksWrapper) {
        book.addEventListener('dblclick', function (event) {
          event.preventDefault();
          book.classList.add('favorite');
          const bookId = book.getAttribute('data-id');
          favoriteBooks.push(bookId);
        });
      }

      console.log('tab:', favoriteBooks);
    }

    // filerBooks() {
    //   const thisBookList = this;
    // }

    // determineRatingBgc() {
    //   const thisBookList = this;
    // }
  }

  const app = new BooksList();
  console.log(app);
}
