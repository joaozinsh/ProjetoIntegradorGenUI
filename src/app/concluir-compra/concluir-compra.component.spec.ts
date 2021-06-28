import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcluirCompraComponent } from './concluir-compra.component';

describe('ConcluirCompraComponent', () => {
  let component: ConcluirCompraComponent;
  let fixture: ComponentFixture<ConcluirCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcluirCompraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcluirCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
