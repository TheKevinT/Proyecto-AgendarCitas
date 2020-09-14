import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasDocComponent } from './citas-doc.component';

describe('CitasDocComponent', () => {
  let component: CitasDocComponent;
  let fixture: ComponentFixture<CitasDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitasDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitasDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
