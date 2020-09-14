import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarDocComponent } from './registrar-doc.component';

describe('RegistrarDocComponent', () => {
  let component: RegistrarDocComponent;
  let fixture: ComponentFixture<RegistrarDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
