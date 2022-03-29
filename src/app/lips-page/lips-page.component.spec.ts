import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LipsPageComponent } from './lips-page.component';

describe('LipsPageComponent', () => {
  let component: LipsPageComponent;
  let fixture: ComponentFixture<LipsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LipsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LipsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
