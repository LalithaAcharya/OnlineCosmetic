import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NailscomponentComponent } from './nailscomponent.component';

describe('NailscomponentComponent', () => {
  let component: NailscomponentComponent;
  let fixture: ComponentFixture<NailscomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NailscomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NailscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
