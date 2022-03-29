import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanserPageComponent } from './cleanser-page.component';

describe('CleanserPageComponent', () => {
  let component: CleanserPageComponent;
  let fixture: ComponentFixture<CleanserPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CleanserPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CleanserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
