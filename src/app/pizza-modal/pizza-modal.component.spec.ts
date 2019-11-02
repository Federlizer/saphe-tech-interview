import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaModalComponent } from './pizza-modal.component';

describe('PizzaModalComponent', () => {
  let component: PizzaModalComponent;
  let fixture: ComponentFixture<PizzaModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
