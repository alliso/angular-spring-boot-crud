import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Observable, of } from 'rxjs';
import { AppRoutingModule } from '../app-routing.module';
import { BookService } from '../book/book.service';
import { Book } from '../shared/book';

import { BooksListComponent } from './books-list.component';

describe('BooksListComponent', () => {
  let component: BooksListComponent;
  let fixture: ComponentFixture<BooksListComponent>;

  let bookService: BookService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksListComponent ],
      imports: [
        HttpClientModule,
        MatDialogModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksListComponent);
    component = fixture.componentInstance;

    bookService = TestBed.inject(BookService);

    component.ngOnInit();

    fixture.detectChanges();

    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#openPopup should open dialog', () => {
      const book: Observable<Book> = of({
        id: 1,
        title: "Book",
        author: "Pepe",
        description: "Description"
      })
      spyOn(bookService, 'getBookById').and.returnValue(book);

      component.openPopup(1);
      fixture.detectChanges();


      const popupHeader = document.getElementsByClassName('matInput')[0] as HTMLInputElement;
      expect(popupHeader.value).toContain("Book");
    }
  );

  
});
