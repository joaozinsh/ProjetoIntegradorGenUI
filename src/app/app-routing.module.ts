import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ConcluirCompraComponent } from './concluir-compra/concluir-compra.component';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';
import { LoginCadastroComponent } from './login-cadastro/login-cadastro.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { SobreComponent } from './sobre/sobre.component';
import { TelaAdminComponent } from './tela-admin/tela-admin.component';

const routes: Routes = [

  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "login-cadastro", component: LoginCadastroComponent},
  {path: "home", component: HomeComponent},
  {path: "contato", component: ContatoComponent},
  {path: "concluir-compra", component: ConcluirCompraComponent},
  {path: "pagamento", component: PagamentoComponent},
  {path: "produtos", component: ProdutosComponent},
  {path: "sobre", component: SobreComponent},
  {path: "carrinho", component: CarrinhoComponent},
  {path: "admin", component: TelaAdminComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
