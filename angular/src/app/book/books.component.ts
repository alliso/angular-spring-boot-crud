import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookService } from './book.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BookModalComponent } from '../book-modal/book-modal.component';
import { BookPage } from '../shared/bookPage';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[];
  pages: number;
  currentPage: number;
  constructor(  private bookService: BookService, 
                private dialog: MatDialog,
                private route: ActivatedRoute,
                private router: Router) {}

  ngOnInit(): void {
    
    this.bookService.getBooks(0).subscribe((data: BookPage) => {
      this.books = data.content;
      this.pages = data.totalPages;
    })
  }

  abrirPopup(id: number) {
    const dialogRef = this.dialog.open(BookModalComponent, { width: '500px', height: '400px', data:id})
  }

}
