import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTrainingComponent } from './home-training.component';

describe('HomeTrainingComponent', () => {
  let component: HomeTrainingComponent;
  let fixture: ComponentFixture<HomeTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
