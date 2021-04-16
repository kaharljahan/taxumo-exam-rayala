import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunningtimeComponent } from './runningtime.component';

describe('RunningtimeComponent', () => {
  let component: RunningtimeComponent;
  let fixture: ComponentFixture<RunningtimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunningtimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunningtimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
