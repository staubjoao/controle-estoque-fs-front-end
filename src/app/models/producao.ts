import { Receita } from './receita';

export interface Producao {
  id?: number;
  receita: Receita | undefined;
  quantidadeReceitas: number;
}
