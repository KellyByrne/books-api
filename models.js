const {sequelize} = require('./db');
const {DataTypes} = require('sequelize');

const Book = sequelize.define('Book', {
    title: {
        type: DataTypes.STRING,
        validate: {
            max: 100
        }
    },
    author_fname: {
        type: DataTypes.STRING,
        validate: {
            max: 50
        }
    },
    author_lname: {
        type: DataTypes.STRING,
        validate: {
            max: 50
        }
    },
    year_published: {
        type: DataTypes.INTEGER
    },
    pages: {
        type: DataTypes.INTEGER
    },
    book_cover: {
        type: DataTypes.STRING,
        validate: {
            max: 400
        }
    },
    genre: {
        type: DataTypes.STRING,
        validate: {
            max: 50
        }
    },
    price: {
        type: DataTypes.DECIMAL,
    }

});

// sequelize.sync();

module.exports = Book;