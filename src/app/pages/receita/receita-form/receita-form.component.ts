import { ReceitaService } from './../../../services/receita.service';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { ItemEstoque } from 'src/app/models/item-estoque';
import { ItemReceita } from 'src/app/models/item-receita';
import { Receita } from 'src/app/models/receita';
import { ItemEstoqueService } from 'src/app/services/item-estoque.service';

enum Grandeza {
  GRAMAS = 'gramas',
  KILOS = 'kilos',
  MILILITROS = 'mililitros',
  LITROS = 'litros'
}

@Component({
  selector: 'app-receita-form',
  templateUrl: './receita-form.component.html',
  styleUrls: ['./receita-form.component.scss'],
})
export class ReceitaFormComponent implements OnInit {

  @Input() receita?: any;

  novaReceita: Receita = {
    descricao: '',
    itens: []
  };

  itemReceita: ItemReceita = {
    idItemEstoque: 0,
    quantidade: null,
    grandeza: ''
  }

  itemEstoqueLista: ItemEstoque[] = [];
  grandezas = Object.values(Grandeza);

  constructor(
    private modalController: ModalController,
    private itemEstoqueService: ItemEstoqueService,
    private receitaService: ReceitaService,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    if (this.receita) {
      console.log('Receita recebida:', this.receita);
      this.novaReceita.itens = this.receita.itens;
      this.novaReceita.descricao = this.receita.receita.descricao;
      this.novaReceita.id = this.receita.receita.id;
    }

    this.itemEstoqueService.getAll().subscribe(itens => {
      this.itemEstoqueLista = itens;
    });
  }

  dismiss() {
    this.modalController.dismiss();
  }

  getItemDescricao(idItemEstoque: number): string {
    const item = this.itemEstoqueLista.find(item => item.id === idItemEstoque);
    return item ? item.descricao : '';
  }

  adicionarItemReceita() {
    this.novaReceita.itens.push({ ...this.itemReceita });
    this.itemReceita = {
      idItemEstoque: 0,
      quantidade: null,
      grandeza: ''
    };
  }

  editarItemReceita(index: number) {
    this.itemReceita = { ...this.novaReceita.itens[index] };
    this.novaReceita.itens.splice(index, 1);
  }

  removerItemReceita(index: number) {
    this.novaReceita.itens.splice(index, 1);
  }

  async salvar() {
    try {
      if (this.novaReceita?.id) {
        await this.receitaService.put(this.novaReceita).toPromise();
        const toast = await this.toastController.create({
          message: 'Receita alterado com sucesso!',
          duration: 2000,
          color: 'success'
        });
        await toast.present();
        this.dismiss();
      } else {
        await this.receitaService.post(this.novaReceita).toPromise();
        const toast = await this.toastController.create({
          message: 'Receita salva com sucesso!',
          duration: 2000,
          color: 'success'
        });
        await toast.present();
        this.dismiss();
      }
    } catch (error) {
      console.error(error);
      const toast = await this.toastController.create({
        message: this.novaReceita?.id ? 'Ocorreu um erro ao alterar a receita.' : 'Ocorreu um erro ao salvar receita.',
        duration: 2000,
        color: 'danger'
      });
      await toast.present();
    }
  }
}
