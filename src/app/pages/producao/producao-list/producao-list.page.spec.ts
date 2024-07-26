import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProducaoListPage } from './producao-list.page';

describe('ProducaoListPage', () => {
  let component: ProducaoListPage;
  let fixture: ComponentFixture<ProducaoListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducaoListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
