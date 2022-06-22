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
  styleUrls: ['./books.component.scss']
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
      this.pages = data.totalPages;
    })
  }

}
