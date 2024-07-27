import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalEstoqueFormComponent } from './pages/local-estoque/local-estoque-form/local-estoque-form.component';
import { ItemEstoqueFormComponent } from './pages/item-estoque/item-estoque-form/item-estoque-form.component';
import { ReceitaFormComponent } from './pages/receita/receita-form/receita-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LocalEstoqueFormComponent,
    ItemEstoqueFormComponent,
    ReceitaFormComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
