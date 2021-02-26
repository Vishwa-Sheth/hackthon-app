import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMainComponentComponent } from './dashboard-main-component.component';

describe('DashboardMainComponentComponent', () => {
  let component: DashboardMainComponentComponent;
  let fixture: ComponentFixture<DashboardMainComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardMainComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardMainComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
