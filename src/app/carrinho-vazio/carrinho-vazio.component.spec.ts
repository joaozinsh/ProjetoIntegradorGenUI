import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrinhoVazioComponent } from './carrinho-vazio.component';

describe('CarrinhoVazioComponent', () => {
  let component: CarrinhoVazioComponent;
  let fixture: ComponentFixture<CarrinhoVazioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrinhoVazioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrinhoVazioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
