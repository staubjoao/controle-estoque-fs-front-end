import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Itens do estoque', url: '/item-list', icon: 'cube' },
    { title: 'Locais do estoque', url: '/local-estoque-list', icon: 'business' },
    { title: 'Receitas', url: '/receita-list', icon: 'book' },
    { title: 'Produções', url: '/producao-list', icon: 'hammer' },
    { title: 'Vendas', url: '/venda-list', icon: 'cart' },
    // { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
