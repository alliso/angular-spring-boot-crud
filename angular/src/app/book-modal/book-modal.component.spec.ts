import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { BookService } from '../book/book.service';
import { Book } from '../shared/book';

import { BookModalComponent } from './book-modal.component';

describe('BookModalComponent', () => {
  let component: BookModalComponent;
  let fixture: ComponentFixture<BookModalComponent>;

  let bookService: BookService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookModalComponent ],
      imports: [
        HttpClientModule,
        MatDialogModule,
        ReactiveFormsModule
      ],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {}
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {}
        },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookModalComponent);
    component = fixture.componentInstance;

    bookService = TestBed.inject(BookService);

    const book: Observable<Book> = of({
      id: 1,
      title: "Book",
      author: "Pepe",
      description: "Description"
    })
    spyOn(bookService, 'getBookById').and.returnValue(book);
    component.ngOnInit()

    fixture.detectChanges();

    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#getData should return book with book id equals 1', () => {
    expect(component.getData().id).toBe(1);
  })

  it('#deleteBook should call one time deleteBookById in book service', () => {
    const book: Observable<Book> = of({
      id: 1,
      title: "Book",
      author: "Pepe",
      description: "Description"
    })
    spyOn(bookService, 'deleteBookById').and.returnValue(book);

    component.deleteBook(1);
    fixture.detectChanges();

    expect(bookService.deleteBookById).toHaveBeenCalled();
  });

  it('#updateBook should call one time Update', () => {
    const book: Observable<Book> = of({
      id: 1,
      title: "Book",
      author: "Pepe",
      description: "Description"
    })
    spyOn(bookService, 'updateBook').and.returnValue(book);

    component.updateBook();
    fixture.detectChanges();

    expect(bookService.updateBook).toHaveBeenCalled();
  })

  it('#createBook should call one time Create', () => {
    const book: Observable<Book> = of({
      id: 1,
      title: "Book",
      author: "Pepe",
      description: "Description"
    })
    spyOn(bookService, 'createBook').and.returnValue(book);

    component.createBook();
    fixture.detectChanges();

    expect(bookService.createBook).toHaveBeenCalled();
  });

});
