import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StairccaseComponent } from './stairccase.component';

describe('StairccaseComponent', () => {
  let component: StairccaseComponent;
  let fixture: ComponentFixture<StairccaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StairccaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StairccaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
