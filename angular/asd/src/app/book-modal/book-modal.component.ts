import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Book } from '../shared/book';
import { BookService } from '../book/book.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-modal',
  templateUrl: './book-modal.component.html',
  styleUrls: ['./book-modal.component.css']
})
export class BookModalComponent implements OnInit {
  public bookForm:FormGroup;

  book: Book = new Book();

  constructor(public dialogRef: MatDialogRef<BookModalComponent>, 
              @Inject(MAT_DIALOG_DATA) public data: number,
              private bookService: BookService,
              private fb: FormBuilder) { 
                this.bookForm = this.fb.group(
                  {
                    title:"",
                    author:""
                  }
                )
              }

  ngOnInit(): void {
    if (this.data != 0)
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

  updateBook() {
    this.book.title = this.bookForm.get("title")?.value;
    this.book.author = this.bookForm.get("author")?.value;
    this.bookService.updateBook(this.book).subscribe((data: Book) => console.log("Updated book", data));
  }

  createBook() {
    this.book.title = this.bookForm.get("title")?.value;
    this.book.author = this.bookForm.get("author")?.value;
    this.bookService.createBook(this.book).subscribe((data: Book) => console.log("Created book", data));
  }

}
