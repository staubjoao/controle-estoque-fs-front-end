import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemEstoqueListPage } from './item-estoque-list.page';

const routes: Routes = [
  {
    path: '',
    component: ItemEstoqueListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemEstoqueListPageRoutingModule {}
