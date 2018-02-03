import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionActivosComponent } from './gestion-activos.component';

describe('GestionActivosComponent', () => {
  let component: GestionActivosComponent;
  let fixture: ComponentFixture<GestionActivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionActivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionActivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
