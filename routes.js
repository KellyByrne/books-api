const express = require('express');
const router = express.Router();
const Book = require('./models');

router.get('/books', async (request, response) => {
    const books = await Book.findAll();

    response.status(200).json(books);
});

router.post('/books', async (request, response) => {
    const {
        title, 
        author_fname, 
        author_lname, 
        year_published, pages, 
        book_cover, 
        genre,
        price
    } = request.body;


    const newBook = Book.build({
        'title': title,
        'author_fname': author_fname,
        'author_lname': author_lname,
        'year_published': year_published,
        'pages': pages,
        'book_cover': book_cover,
        'genre': genre,
        'price': price
    });

    console.log(newBook);

    try{
        await newBook.save();
        response.status(201).json(newBook);
    }
    catch(error) {
        response.json(error);
    }

});

router.get('/book/:id', async (request, response) => {
    const book = await Book.findOne({
        where: {
            id: request.params.id
        }
    });

    response.status(200).json(book);

});

// update
router.put('/book/:id', async (request, response) => {
    const book = await Book.findOne({
        where: {
            id: request.params.id
        }
    });

    const {
        title, 
        author_fname, 
        author_lname, 
        year_published, pages, 
        book_cover, 
        genre,
        price
    } = request.body;

    await book.set(
        {
            'title': title,
            'author_fname': author_fname,
            'author_lname': author_lname,
            'year_published': year_published,
            'pages': pages,
            'book_cover': book_cover,
            'genre': genre,
            'price': price
        }
    )

    await book.save();
    response.status(200).json(book);

});

router.delete('/book/:id', async (request, response) => {
    const book = await Book.findOne({
        where: {
            id: request.params.id
        }
    });

    await book.delete();
    response.status(204);

});

// router.get('/cart', (request, response) => {

// });

module.exports = router;