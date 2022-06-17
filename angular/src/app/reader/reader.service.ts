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
}
