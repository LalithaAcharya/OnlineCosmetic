import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerumComponent } from './serum.component';

describe('SerumComponent', () => {
  let component: SerumComponent;
  let fixture: ComponentFixture<SerumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
