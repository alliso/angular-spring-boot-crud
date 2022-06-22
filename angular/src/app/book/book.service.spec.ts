import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Book } from '../shared/book';

import { BookService } from './book.service';

describe('BookService', () => {
  let service: BookService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(BookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getBookById should return book with title 1234', (done) => {
    service.getBookById(1).subscribe(book => {
      expect(book.title).toBe('1234');
      done();
    });
  });

  it('#createBook should return book with title title', (done) => {
    const book: Book = {
      id: 1,
      title: 'title',
      description: 'description',
      author: 'Pepe',
    };

    service.createBook(book).subscribe(data => {
      expect(data.title).toBe('title');
      done();
    });
  });

  it('#deleteBookById should return status code 200', (done) => {
    service.deleteBookById(1).subscribe((data) => {
      expect(data).toBeTruthy();
      done();
    });
  });

  it('#deleteBookById should return status code 200', (done) => {
    const book: Book = {
      id: 1,
      title: 'title',
      description: 'description',
      author: 'Pepe',
    };
    
    service.updateBook(book).subscribe((data) => {
      expect(data).toBeTruthy();
      done();
    });
  });

});
