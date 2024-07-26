import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProducaoListPageRoutingModule } from './producao-list-routing.module';

import { ProducaoListPage } from './producao-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProducaoListPageRoutingModule
  ],
  declarations: [ProducaoListPage]
})
export class ProducaoListPageModule {}
