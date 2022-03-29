import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestdealsPageComponent } from './bestdeals-page.component';

describe('BestdealsPageComponent', () => {
  let component: BestdealsPageComponent;
  let fixture: ComponentFixture<BestdealsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestdealsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestdealsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
