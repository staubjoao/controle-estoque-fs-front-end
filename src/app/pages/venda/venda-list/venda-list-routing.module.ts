import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendaListPage } from './venda-list.page';

const routes: Routes = [
  {
    path: '',
    component: VendaListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendaListPageRoutingModule {}
