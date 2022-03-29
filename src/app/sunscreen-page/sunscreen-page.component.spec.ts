import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunscreenPageComponent } from './sunscreen-page.component';

describe('SunscreenPageComponent', () => {
  let component: SunscreenPageComponent;
  let fixture: ComponentFixture<SunscreenPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SunscreenPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SunscreenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
