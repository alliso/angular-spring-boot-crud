package es.uv.book.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import es.uv.book.entities.Book;
import es.uv.book.services.BookService;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/api/books")
@CrossOrigin
@Slf4j
public class BookController {
    
    @Autowired
    private BookService bookService;

    @GetMapping
    public ResponseEntity<Page<Book>> findAllBooks(  @RequestParam(name = "page", defaultValue = "0") int page, 
                                                    @RequestParam(name = "size", defaultValue = "2") int size) {
        log.info("Find all books with page: {} and size {}", page, size);
        return new ResponseEntity<>(bookService.findAllBooks(page, size), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Book> saveBook(@RequestBody Book book) {
        log.info("Save book with title {}", book.getTitle());
        return new ResponseEntity<>(bookService.saveBook(book), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Book> findBookById(@PathVariable("id") long id) {
        log.info("Find book with id: {}", id);
        return new ResponseEntity<>(bookService.findBookById(id), HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Book> updateBookById(@PathVariable("id") long id, @RequestBody Book book) {
        log.info("Update book with id: {}", id);
        return new ResponseEntity<>(bookService.updateBookById(id, book), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Book> deleteBookById(@PathVariable("id") long id) {
        log.info("Delete book with id: {}", id);
        bookService.deleteBookById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
