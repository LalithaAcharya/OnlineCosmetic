import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacePageComponent } from './face-page.component';

describe('FacePageComponent', () => {
  let component: FacePageComponent;
  let fixture: ComponentFixture<FacePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
