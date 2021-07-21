import { CarrinhoVazioComponent } from './carrinho-vazio/carrinho-vazio.component';
import { Component, NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ConcluirCompraComponent } from './concluir-compra/concluir-compra.component';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';
import { LoginCadastroComponent } from './login-cadastro/login-cadastro.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { MedicamentosComponent } from './medicamentos/medicamentos.component';
import { SobreComponent } from './sobre/sobre.component';
import { DoencaAdminComponent } from './admin/doenca-admin/doenca-admin.component';
import { MedicamentosAdminComponent } from './admin/medicamentos-admin/medicamentos-admin.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login-cadastro', component: LoginCadastroComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'carrinho-vazio', component: CarrinhoVazioComponent },
  { path: 'concluir-compra', component: ConcluirCompraComponent },
  { path: 'pagamento', component: PagamentoComponent },
  { path: 'medicamentos', component: MedicamentosComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'admin-doenca', component: DoencaAdminComponent },
  { path: 'admin-medicamentos', component: MedicamentosAdminComponent }
];

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
};

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
