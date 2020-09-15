import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsesContainerComponent } from './uses-container.component';

describe('UsesContainerComponent', () => {
  let component: UsesContainerComponent;
  let fixture: ComponentFixture<UsesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsesContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
