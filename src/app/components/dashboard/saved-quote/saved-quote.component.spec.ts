import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedQuoteComponent } from './saved-quote.component';

describe('SavedQuoteComponent', () => {
  let component: SavedQuoteComponent;
  let fixture: ComponentFixture<SavedQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
