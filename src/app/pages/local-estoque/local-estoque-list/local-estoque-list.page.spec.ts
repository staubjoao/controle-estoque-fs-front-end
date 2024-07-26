import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LocalEstoqueListPage } from './local-estoque-list.page';

describe('LocalEstoqueListPage', () => {
  let component: LocalEstoqueListPage;
  let fixture: ComponentFixture<LocalEstoqueListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalEstoqueListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
