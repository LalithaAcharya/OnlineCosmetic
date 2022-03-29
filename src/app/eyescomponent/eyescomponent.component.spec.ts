import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EyescomponentComponent } from './eyescomponent.component';

describe('EyescomponentComponent', () => {
  let component: EyescomponentComponent;
  let fixture: ComponentFixture<EyescomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EyescomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EyescomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
