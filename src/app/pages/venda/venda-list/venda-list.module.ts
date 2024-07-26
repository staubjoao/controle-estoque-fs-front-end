import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendaListPageRoutingModule } from './venda-list-routing.module';

import { VendaListPage } from './venda-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendaListPageRoutingModule
  ],
  declarations: [VendaListPage]
})
export class VendaListPageModule {}
