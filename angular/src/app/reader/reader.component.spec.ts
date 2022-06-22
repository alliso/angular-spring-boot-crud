import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { Reader } from '../shared/reader';

import { ReaderComponent } from './reader.component';
import { ReaderService } from './reader.service';

describe('ReaderComponent', () => {
  let component: ReaderComponent;
  let fixture: ComponentFixture<ReaderComponent>;
  let readerService: ReaderService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReaderComponent ],
      imports: [
        HttpClientModule,
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReaderComponent);
    component = fixture.componentInstance;
    
    readerService = TestBed.inject(ReaderService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have readers', (done) => {
    let readers: Observable<Reader[]> = of([{
      id: 2,
      firstName: "Pruebas",
      lastName: "Pruebas",
      linkedBooks: []
    }])
    let spy = spyOn(readerService, 'getReaders').and.returnValue(readers);
    component.ngOnInit();
    fixture.detectChanges();
    spy.calls.mostRecent();

    expect(component.readers.length).toBe(1);
    done();
  })
});
