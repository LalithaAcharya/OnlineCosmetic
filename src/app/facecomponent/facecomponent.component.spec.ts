import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacecomponentComponent } from './facecomponent.component';

describe('FacecomponentComponent', () => {
  let component: FacecomponentComponent;
  let fixture: ComponentFixture<FacecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacecomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
