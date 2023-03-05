import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicoService } from './servico.service';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { MinhaPromiseComponent } from './minha-promise/minha-promise.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaProdutoComponent,
    MinhaPromiseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ServicoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
