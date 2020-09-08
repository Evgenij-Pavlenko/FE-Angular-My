import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstNameFilterComponent } from './first-name-filter.component';

describe('FirstNameFilterComponent', () => {
  let component: FirstNameFilterComponent;
  let fixture: ComponentFixture<FirstNameFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstNameFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstNameFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
