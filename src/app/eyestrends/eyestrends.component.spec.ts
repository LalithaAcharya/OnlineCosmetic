import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EyestrendsComponent } from './eyestrends.component';

describe('EyestrendsComponent', () => {
  let component: EyestrendsComponent;
  let fixture: ComponentFixture<EyestrendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EyestrendsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EyestrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
