import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDishesComponent } from './list-dishes.component';

describe('ListDishesComponent', () => {
  let component: ListDishesComponent;
  let fixture: ComponentFixture<ListDishesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListDishesComponent]
    });
    fixture = TestBed.createComponent(ListDishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
