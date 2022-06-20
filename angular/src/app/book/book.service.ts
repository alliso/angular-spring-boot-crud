import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../shared/book';
import { BookPage } from '../shared/bookPage';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl = "http://localhost:8080/api/books"

  constructor(private http: HttpClient) { }

  getBooks(page: number): Observable<BookPage> {
    return this.http.get<BookPage>(`${this.baseUrl}/?page=${page}`);
  }

  getBookById(id: number) {
    return this.http.get<Book>(this.baseUrl + "/" + id);
  }

  updateBook(book: Book) {
    return this.http.put<Book>(this.baseUrl + "/" + book.id, book);
  }

  deleteBookById(id: number) {
    return this.http.delete<Book>(this.baseUrl + "/" + id);
  }

  createBook(book: Book) {
    return this.http.post<Book>(this.baseUrl, book);
  }

}
