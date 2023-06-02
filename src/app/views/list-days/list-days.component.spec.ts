import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDaysComponent } from './list-days.component';

describe('ListDaysComponent', () => {
  let component: ListDaysComponent;
  let fixture: ComponentFixture<ListDaysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListDaysComponent]
    });
    fixture = TestBed.createComponent(ListDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
