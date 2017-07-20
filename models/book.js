var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    genres: {
        type: String,
        require: true
    },
    description: {
        type: String

    },
    author: {
        type: String,
        require: true
    },
    publisher: {
        type: String
    },
    pages: {
        type: Number
    },
    images_url: {
        type: String
    },
    buy_url: {
        type: String
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

var Book = module.exports = mongoose.model('Book', bookSchema);


// Get bookSchema

module.exports.getBooks = function(callback, limit) {
    Book.find(callback).limit(limit);
}
module.exports.getBookbyID = function(id, callback) {
    Book.find(id, callback);
}

module.exports.addBook = function(book, callback) {
        Book.create(book, callback);
    }
    // Update Book
module.exports.updateBook = function(id, book, options, callback) {
    var query = { _id: id };
    var update = {
        title: book.name,
        author: book.author,
        genres: book.genres,
        description: book.description,
        publisher: book.publisher,
        pages: book.pages,
        images_url: book.images_url,
        buy_url: book.buy_url


    };
    Book.findOneAndUpdate(query, update, options, callback);

}

// Remove Book
module.exports.removeBook = function(id, callback) {
    var query = { _id: id }
    Book.create(query, callback);
}