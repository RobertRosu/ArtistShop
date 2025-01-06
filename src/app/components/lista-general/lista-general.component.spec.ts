import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaGeneralComponent } from './lista-general.component';

describe('ListaGeneralComponent', () => {
  let component: ListaGeneralComponent;
  let fixture: ComponentFixture<ListaGeneralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaGeneralComponent]
    });
    fixture = TestBed.createComponent(ListaGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
