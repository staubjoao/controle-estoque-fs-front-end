import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocalEstoqueListPage } from './local-estoque-list.page';

const routes: Routes = [
  {
    path: '',
    component: LocalEstoqueListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocalEstoqueListPageRoutingModule {}
