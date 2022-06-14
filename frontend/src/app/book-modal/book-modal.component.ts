import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Book } from '../shared/book';
import { BookService } from '../book/book.service';

@Component({
  selector: 'app-book-modal',
  templateUrl: './book-modal.component.html',
  styleUrls: ['./book-modal.component.css']
})
export class BookModalComponent implements OnInit {
  book: Book = new Book();

  constructor(public dialogRef: MatDialogRef<BookModalComponent>, 
              @Inject(MAT_DIALOG_DATA) public data: number,
              private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getBookById(this.data).subscribe((data: Book) => {
      this.book = data;
    })
  }

  getData(): Book {
    return this.book;
  }

  deleteBook(id: number) {
    this.bookService.deleteBookById(id).subscribe((data: Book) => console.log("Deleted book", data));
  }

}
