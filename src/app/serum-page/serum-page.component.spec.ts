import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerumPageComponent } from './serum-page.component';

describe('SerumPageComponent', () => {
  let component: SerumPageComponent;
  let fixture: ComponentFixture<SerumPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerumPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerumPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
