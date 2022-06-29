import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reader } from '../shared/reader';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReaderService {
  private baseUrl: string = "http://localhost:8080/api/readers";

  constructor(private http: HttpClient) { }

  getReaders(): Observable<Reader[]> {
    return this.http.get<Reader[]>(this.baseUrl)
  }

  getReaderById(id: number): Observable<Reader> {
    return this.http.get<Reader>(this.baseUrl + "/" + id);
  }

  addBookById(readerid:number, bookId: number): Observable<Reader> {
    return this.http.put<Reader>(this.baseUrl + "/" + readerid + "/books/" + bookId, {})
  }

  deleteBookById(readerid:number, bookId: number): Observable<Reader> {
    return this.http.delete<Reader>(this.baseUrl + "/" + readerid + "/books/" + bookId);
  }

  createReader(reader:Reader): Observable<Reader> {
    return this.http.post<Reader>(this.baseUrl, reader);
  }

  deleteReader(id: number): Observable<Reader> {
    return this.http.delete<Reader>(this.baseUrl + "/" + id);
  }
}
