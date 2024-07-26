import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReceitaListPage } from './receita-list.page';

describe('ReceitaListPage', () => {
  let component: ReceitaListPage;
  let fixture: ComponentFixture<ReceitaListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceitaListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
