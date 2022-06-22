import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeShelterComponent } from './home-shelter.component';

describe('HomeShelterComponent', () => {
  let component: HomeShelterComponent;
  let fixture: ComponentFixture<HomeShelterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeShelterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeShelterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
