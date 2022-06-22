package es.uv.book.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import es.uv.book.entities.Book;
import es.uv.book.entities.Reader;
import es.uv.book.exceptions.NotFoundException;
import es.uv.book.repositories.BookRepository;

@Service
public class BookService {
    
    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private ReaderService readerService;

    public Page<Book> findAllBooks(int page, int size) {
        Pageable currentPage = PageRequest.of(page, size);
        Page<Book> books = bookRepository.findAll(currentPage);

        //if (books.isEmpty())
          //  throw new NotFoundException("We don't have any book");
        
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

    public void deleteBookById(long id) {
        Optional<Book> optBook = bookRepository.findById(id);

        if(!optBook.isPresent())
            throw new NotFoundException("We don't have any book with id: " + id);

        Book book = optBook.get();

        for(Reader reader: book.getLinkedReaders())
            readerService.deleteBookFromReader(reader, book);

        bookRepository.deleteById(id);
    }

}
