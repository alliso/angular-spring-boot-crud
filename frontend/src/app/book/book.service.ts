import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../shared/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl = "http://127.0.0.1:8080/api/books"

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}`)
  }

  getBookById(id: number) {
    console.log("ID", id)
    return this.http.get<Book>(this.baseUrl + "/" + id);
  }

  deleteBookById(id: number) {
    console.log("Delete", id)
    return this.http.delete<Book>(this.baseUrl + "/" + id);
  }

}
