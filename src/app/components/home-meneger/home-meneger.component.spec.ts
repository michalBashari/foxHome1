import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMenegerComponent } from './home-meneger.component';

describe('HomeMenegerComponent', () => {
  let component: HomeMenegerComponent;
  let fixture: ComponentFixture<HomeMenegerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMenegerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMenegerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
