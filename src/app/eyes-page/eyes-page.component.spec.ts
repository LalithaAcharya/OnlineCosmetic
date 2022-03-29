import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EyesPageComponent } from './eyes-page.component';

describe('EyesPageComponent', () => {
  let component: EyesPageComponent;
  let fixture: ComponentFixture<EyesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EyesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EyesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
