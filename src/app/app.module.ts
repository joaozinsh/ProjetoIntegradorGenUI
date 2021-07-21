import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RodapeComponent } from './rodape/rodape.component';
import { HomeComponent } from './home/home.component';
import { LoginCadastroComponent } from './login-cadastro/login-cadastro.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ConcluirCompraComponent } from './concluir-compra/concluir-compra.component';
import { ContatoComponent } from './contato/contato.component';
import { CarrinhoVazioComponent } from './carrinho-vazio/carrinho-vazio.component';
import { MedicamentosComponent } from './medicamentos/medicamentos.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { SobreComponent } from './sobre/sobre.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { NavbarLogadoComponent } from './navbar-logado/navbar-logado.component';
import { DoencaAdminComponent } from './admin/doenca-admin/doenca-admin.component';
import { MedicamentosAdminComponent } from './admin/medicamentos-admin/medicamentos-admin.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    RodapeComponent,
    HomeComponent,
    ContatoComponent,
    LoginCadastroComponent,
    NavbarComponent,
    ConcluirCompraComponent,
    CarrinhoVazioComponent,
    MedicamentosComponent,
    PagamentoComponent,
    SobreComponent,
    CarrinhoComponent,
    NavbarLogadoComponent,
    DoencaAdminComponent,
    MedicamentosAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot()

  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
