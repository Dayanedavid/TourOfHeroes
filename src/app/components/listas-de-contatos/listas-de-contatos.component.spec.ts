import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasDeContatosComponent } from './listas-de-contatos.component';

describe('ListasDeContatosComponent', () => {
  let component: ListasDeContatosComponent;
  let fixture: ComponentFixture<ListasDeContatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListasDeContatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListasDeContatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
