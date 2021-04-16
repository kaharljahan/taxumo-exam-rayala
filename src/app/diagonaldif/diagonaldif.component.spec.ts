import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagonaldifComponent } from './diagonaldif.component';

describe('DiagonaldifComponent', () => {
  let component: DiagonaldifComponent;
  let fixture: ComponentFixture<DiagonaldifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagonaldifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagonaldifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
