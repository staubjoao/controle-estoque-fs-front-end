import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemEstoqueListPage } from './item-estoque-list.page';

describe('ItemEstoqueListPage', () => {
  let component: ItemEstoqueListPage;
  let fixture: ComponentFixture<ItemEstoqueListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemEstoqueListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
