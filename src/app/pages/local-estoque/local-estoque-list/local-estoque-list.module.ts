import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocalEstoqueListPageRoutingModule } from './local-estoque-list-routing.module';

import { LocalEstoqueListPage } from './local-estoque-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocalEstoqueListPageRoutingModule
  ],
  declarations: [LocalEstoqueListPage]
})
export class LocalEstoqueListPageModule {}
