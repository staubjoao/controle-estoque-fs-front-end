import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'item-list',
    loadChildren: () => import('./pages/item/item-list/item-list.module').then( m => m.ItemListPageModule)
  },
  {
    path: 'receita-list',
    loadChildren: () => import('./pages/receita/receita-list/receita-list.module').then( m => m.ReceitaListPageModule)
  },
  {
    path: 'venda-list',
    loadChildren: () => import('./pages/venda/venda-list/venda-list.module').then( m => m.VendaListPageModule)
  },
  {
    path: 'local-estoque-list',
    loadChildren: () => import('./pages/local-estoque/local-estoque-list/local-estoque-list.module').then( m => m.LocalEstoqueListPageModule)
  },
  {
    path: 'producao-list',
    loadChildren: () => import('./pages/producao/producao-list/producao-list.module').then( m => m.ProducaoListPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
