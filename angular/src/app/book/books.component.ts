import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookService } from './book.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BookModalComponent } from '../book-modal/book-modal.component';

@Component({
  selector: 'app-book',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[];
  constructor(private bookService: BookService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data: Book[]) => {
      console.log(data);
      this.books = data;
    })
  }

  abrirPopup(id: number) {
    const dialogRef = this.dialog.open(BookModalComponent, { width: '500px', height: '400px', data:id})
  }

}
