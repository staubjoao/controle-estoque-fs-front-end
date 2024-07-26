import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProducaoListPage } from './producao-list.page';

const routes: Routes = [
  {
    path: '',
    component: ProducaoListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProducaoListPageRoutingModule {}
