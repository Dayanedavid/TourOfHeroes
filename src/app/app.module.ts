import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatoComponent } from './components/contato/contato.component';
import { ListasDeContatosComponent } from './components/listas-de-contatos/listas-de-contatos.component';

@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent,
    ListasDeContatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
