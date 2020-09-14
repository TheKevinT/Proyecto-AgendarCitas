import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarCitaDocComponent } from './registrar-cita-doc.component';

describe('RegistrarCitaDocComponent', () => {
  let component: RegistrarCitaDocComponent;
  let fixture: ComponentFixture<RegistrarCitaDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarCitaDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarCitaDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
