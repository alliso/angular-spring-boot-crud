package es.uv.book.controllers;

import java.util.List;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
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
import org.springframework.web.bind.annotation.RestController;

import es.uv.book.entities.Reader;
import es.uv.book.services.ReaderService;
import lombok.extern.slf4j.Slf4j;

@RestController
@CrossOrigin
@RequestMapping("/api/readers")
@Slf4j
public class ReaderController {
    
    @Autowired
    private ReaderService readerService;

    @GetMapping
    public ResponseEntity<List<Reader>> getAllReaders() {
        log.info("Find all readers");
        return new ResponseEntity<>(readerService.findAllReaders(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Reader> saveReader(@RequestBody Reader reader) {
        log.info("Save reader with name: {}", reader.getFirstName());
        return new ResponseEntity<>(readerService.saveReader(reader), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Reader> getReaderById(@PathVariable("id") long id) {
        log.info("Find reader with id: {}", id);
        return new ResponseEntity<>(readerService.findReaderById(id), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Reader> deleteReader(@PathVariable("id") long id) {
        log.info("Delete reader with id: {}", id);
        readerService.deleteReader(id);
        
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/{readerid}/books/{bookid}")
    public ResponseEntity<Reader> addBookToReader(
            @PathVariable("readerid") long readerId,
            @PathVariable("bookid") long bookId) {
        log.info("Save reader with id: {}", readerId);
        Reader updatedReader = readerService.addBookToReader(bookId, readerId);
        return new ResponseEntity<>(updatedReader, HttpStatus.OK);
    }

    @DeleteMapping("/{readerid}/books/{bookid}")
    public ResponseEntity<Reader> deleteBookFromReader(
            @PathVariable("readerid") long readerId,
            @PathVariable("bookid") long bookId) {
        log.info("Save reader with id: {}", readerId);
        Reader updatedReader = readerService.deleteBookByIdToReader(bookId, readerId);
        return new ResponseEntity<>(updatedReader, HttpStatus.OK);
    }
}
