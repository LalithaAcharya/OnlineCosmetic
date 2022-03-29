import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoisturizerPageComponent } from './moisturizer-page.component';

describe('MoisturizerPageComponent', () => {
  let component: MoisturizerPageComponent;
  let fixture: ComponentFixture<MoisturizerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoisturizerPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoisturizerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
