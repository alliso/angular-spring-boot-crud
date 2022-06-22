import { Component, OnInit } from '@angular/core';
import { Reader } from '../shared/reader';
import { ReaderService } from './reader.service';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.scss']
})
export class ReaderComponent implements OnInit {

  readers: Reader[]
  constructor(private readerService: ReaderService) { }

  ngOnInit(): void {
    this.readerService.getReaders().subscribe((data: Reader[]) => {
      console.log(data)
      this.readers = data;
      console.log(this.readers);
    })
  }

}
