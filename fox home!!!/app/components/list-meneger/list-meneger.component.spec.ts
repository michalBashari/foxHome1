import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMenegerComponent } from './list-meneger.component';

describe('ListMenegerComponent', () => {
  let component: ListMenegerComponent;
  let fixture: ComponentFixture<ListMenegerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMenegerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMenegerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
