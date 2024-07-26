import { TestBed } from '@angular/core/testing';
import { ItemEstoqueService } from './item-estoque.service';


describe('ItemEstoqueService', () => {
  let service: ItemEstoqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemEstoqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
