import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseModelComponent } from './expense-model.component';

describe('ExpenseModelComponent', () => {
  let component: ExpenseModelComponent;
  let fixture: ComponentFixture<ExpenseModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
