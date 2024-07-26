import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceitaListPage } from './receita-list.page';

const routes: Routes = [
  {
    path: '',
    component: ReceitaListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceitaListPageRoutingModule {}
