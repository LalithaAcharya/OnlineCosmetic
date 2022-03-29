import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowtrendsComponent } from './shadowtrends.component';

describe('ShadowtrendsComponent', () => {
  let component: ShadowtrendsComponent;
  let fixture: ComponentFixture<ShadowtrendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShadowtrendsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadowtrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
