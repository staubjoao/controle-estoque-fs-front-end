import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceitaListPageRoutingModule } from './receita-list-routing.module';

import { ReceitaListPage } from './receita-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceitaListPageRoutingModule
  ],
  declarations: [ReceitaListPage]
})
export class ReceitaListPageModule {}
