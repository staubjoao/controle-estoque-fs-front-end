import { ItemReceita } from "./item-receita";

export interface Receita {
  id?: number;
  descricao: string;
  itens: ItemReceita[];
}
