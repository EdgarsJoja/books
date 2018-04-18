import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksListsComponent } from './books-lists.component';

describe('BooksListsComponent', () => {
  let component: BooksListsComponent;
  let fixture: ComponentFixture<BooksListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
