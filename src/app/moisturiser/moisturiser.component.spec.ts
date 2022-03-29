import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoisturiserComponent } from './moisturiser.component';

describe('MoisturiserComponent', () => {
  let component: MoisturiserComponent;
  let fixture: ComponentFixture<MoisturiserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoisturiserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoisturiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
