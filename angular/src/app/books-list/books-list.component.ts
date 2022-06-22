import { Component, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { BookModalComponent } from '../book-modal/book-modal.component';
import { BookService } from '../book/book.service';
import { Book } from '../shared/book';
import { BookPage } from '../shared/bookPage';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  pages: number;
  currentPage: number;
  books: Book[];
  constructor(  private bookService: BookService, 
                private dialog: MatDialog,
                private route: ActivatedRoute,
                private router: Router) {
    this.route.params.subscribe(params => {
      this.currentPage = params['page'] ? params['page'] : 0;
      this.updateBooks(this.currentPage);
    })
  }

  ngOnInit(): void {
    this.bookService.getBooks(this.currentPage ? this.currentPage : 0).subscribe((data: BookPage) => {
      this.books = data.content;
      this.pages = data.totalPages;
    })
  }

  openPopup(id: number) {
    const dialogRef = this.dialog.open(BookModalComponent, { width: '500px', height: '400px', data:id})
  }

  updateBooks(page: number) {
    console.log("Page", page);
    this.bookService.getBooks(page).subscribe((data: BookPage) => {
      this.books = data.content;
      console.log("Books", this.books);
      this.ngOnInit();
    })
  }

}
