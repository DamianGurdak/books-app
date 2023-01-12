/* global Handlebars, utils, dataSource */ // eslint-disable-line no-unused-vars

{
  // ('use strict');

  const select = {
    templateOf: {
      books: '#template-book',
    },
    containerOf:{
      booksPannel: '.books-list',
    }
  };

  const templates = {
    bookList: Handlebars.compile(
      document.querySelector(select.templateOf.books).innerHTML
    ),
  };

  class BooksList {
    constructor() {
      const thisBookList = this;
      // console.log('bookList:', thisBookList);

      thisBookList.initData();
      thisBookList.renderBooks();
      thisBookList.getElemenst();
      // thisBookList.initActions();
      // thisBookList.filerBooks();
      // thisBookList.determineRatingBgc();
    }

    initData() {
      const thisBookList = this;

      thisBookList.data = dataSource.books;
    }

    getElemenst() {
      const thisBookList = this;
    }

    renderBooks() {
      const thisBookList = this;

      for (const book of dataSource.books) {
        /* [DONE] generate HTML based on template */
        const generateHTML = templates.bookList(book);

        /* [DONE]  create DOMelement using utils.createElementFromHTML */
        const elementDOM = utils.createDOMFromHTML(generateHTML);

        /* [DONE] find menu container */
        const bookWrapper = document.querySelector(select.containerOf.booksPannel);

        /* [DONE] add element to bookList */
        bookWrapper.appendChild(elementDOM);
      }
    }

    // initActions() {
    //   const thisBookList = this;
    // }

    // filerBooks() {
    //   const thisBookList = this;
    // }

    // determineRatingBgc() {
    //   const thisBookList = this;
    // }
  }

  const app = new BooksList();
}
