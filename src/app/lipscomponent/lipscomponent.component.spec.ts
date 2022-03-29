import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LipscomponentComponent } from './lipscomponent.component';

describe('LipscomponentComponent', () => {
  let component: LipscomponentComponent;
  let fixture: ComponentFixture<LipscomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LipscomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LipscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
