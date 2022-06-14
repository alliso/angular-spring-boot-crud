package es.uv.book.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.naming.NameNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import es.uv.book.entities.Book;
import es.uv.book.exceptions.NotFoundException;
import es.uv.book.repositories.BookRepository;

@Service
public class BookService {
    
    @Autowired
    private BookRepository bookRepository;

    public List<Book> findAllBooks() {
        List<Book> books = bookRepository.findAll();

        if (books.isEmpty())
            throw new NotFoundException("We don't have any book");
        
        return books;
    }

    public Book saveBook(Book book) {
        return bookRepository.save(book);
    }

    public Book findBookById(long id) {
        Optional<Book> book = bookRepository.findById(id);

        if(!book.isPresent())
            throw new NotFoundException("We don't have any book with id: " + id);

        return book.get();
    }

    public Book updateBookById(long id, Book updatedBook) {
        Optional<Book> optBook = bookRepository.findById(id);

        if(!optBook.isPresent())
            throw new NotFoundException("We don't have any book with id: " + id);

        Book book = optBook.get();
        book.setTitle(updatedBook.getTitle());
        book.setAuthor(updatedBook.getAuthor());
        
        return bookRepository.save(book);
    }

}
