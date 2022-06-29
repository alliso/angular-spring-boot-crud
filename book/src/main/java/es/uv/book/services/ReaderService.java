package es.uv.book.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import es.uv.book.entities.Book;
import es.uv.book.entities.Reader;
import es.uv.book.exceptions.NotFoundException;
import es.uv.book.repositories.BookRepository;
import es.uv.book.repositories.ReaderRepository;

@Service
public class ReaderService {
    
    @Autowired
    private ReaderRepository readerRepository;

    @Autowired
    private BookRepository bookRepository;

    public List<Reader> findAllReaders() {
        return readerRepository.findAll();
    }

    public Reader findReaderById(long id) {
        Optional<Reader> reader = readerRepository.findById(id); 

        if(!reader.isPresent())
            throw new NotFoundException("We don't have any reader with id: " + id);

        return reader.get();
    }

    public Reader saveReader(Reader reader) {
        return readerRepository.save(reader);
    }

    public Reader updateReader(long id, Reader reader) {
        Optional<Reader> optReader = readerRepository.findById(id);

        if(!optReader.isPresent())
            throw new NotFoundException("We don't have any reader with id: " + id);

        Reader newReader = optReader.get();
        newReader.setFirstName(reader.getFirstName());
        newReader.setLastName(reader.getLastName());
        newReader.setLinkedBooks(reader.getLinkedBooks());

        return readerRepository.save(newReader);
    }

    public void deleteReader(long id) {
        readerRepository.deleteById(id);
    }

    public Reader addBookToReader(long bookId, long readerId) {
        Optional<Reader> optReader = readerRepository.findById(readerId);
        Optional<Book> optBook = bookRepository.findById(bookId);

        if(!optReader.isPresent())
            throw new NotFoundException("We don't have any reader with id: " + readerId);

        if(!optBook.isPresent())
            throw new NotFoundException("We don't have any book with id: " + bookId);

        Reader reader = optReader.get();
        reader.addReadBook(optBook.get());

        return readerRepository.save(reader);
    }

    public Reader deleteBookByIdToReader(long bookId, long readerId) {
        Optional<Reader> optReader = readerRepository.findById(readerId);
        Optional<Book> optBook = bookRepository.findById(bookId);

        if(!optReader.isPresent())
            throw new NotFoundException("We don't have any reader with id: " + readerId);

        if(!optBook.isPresent())
            throw new NotFoundException("We don't have any book with id: " + bookId);

        Reader reader = optReader.get();
        reader.deleteReadBook(optBook.get());

        return readerRepository.save(reader);
    }

    public Reader deleteBookFromReader(Reader reader, Book book) {
        reader.deleteReadBook(book);

        return readerRepository.save(reader);
    }
}
