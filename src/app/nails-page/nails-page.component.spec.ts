import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NailsPageComponent } from './nails-page.component';

describe('NailsPageComponent', () => {
  let component: NailsPageComponent;
  let fixture: ComponentFixture<NailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NailsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
