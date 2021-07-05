import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RodapeComponent } from './rodape/rodape.component';
import { HomeComponent } from './home/home.component';
import { LoginCadastroComponent } from './login-cadastro/login-cadastro.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ConcluirCompraComponent } from './concluir-compra/concluir-compra.component';
import { ContatoComponent } from './contato/contato.component';
<<<<<<< HEAD
import { CarrinhoVazioComponent } from './carrinho-vazio/carrinho-vazio.component';

=======
import { ProdutosComponent } from './produtos/produtos.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { SobreComponent } from './sobre/sobre.component';
>>>>>>> 9cfc58b2ad8b7dd2739b5b79df9dce87b71c201d

@NgModule({
  declarations: [
    AppComponent,
    RodapeComponent,
    HomeComponent,
    ContatoComponent,
    LoginCadastroComponent,
    NavbarComponent,
    ConcluirCompraComponent,
<<<<<<< HEAD
    CarrinhoVazioComponent,
    
=======
    ProdutosComponent,
    PagamentoComponent,
    SobreComponent
>>>>>>> 9cfc58b2ad8b7dd2739b5b79df9dce87b71c201d
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
