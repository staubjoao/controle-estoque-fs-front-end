import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { ItemEstoque } from 'src/app/models/item-estoque';
import { LocalEstoque } from 'src/app/models/local-estoque';
import { ItemEstoqueService } from 'src/app/services/item-estoque.service';
import { LocalEstoqueService } from 'src/app/services/local-estoque.service';

enum Grandeza {
  GRAMAS = 'gramas',
  KILOS = 'kilos',
  MILILITROS = 'mililitros',
  LITROS = 'litros'
}

@Component({
  selector: 'app-item-estoque-quantidade-form',
  templateUrl: './item-estoque-quantidade-form.component.html',
  styleUrls: ['./item-estoque-quantidade-form.component.scss'],
})
export class ItemEstoqueQuantidadeFormComponent implements OnInit {

  @Input() idItemEstoque: number = 0;

  quantidade: number = 0;
  grandeza: string = "";

  grandezas = Object.values(Grandeza);

  constructor(
    private modalController: ModalController,
    private itemEstoqueService: ItemEstoqueService,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    if (this.idItemEstoque) {
      console.log('Item recebido:', this.idItemEstoque);
    }
  }

  dismiss() {
    this.modalController.dismiss();
  }

  async salvar() {
    try {
      await this.itemEstoqueService.atualizaQuantidade(this.idItemEstoque, this.quantidade, this.grandeza).toPromise();
      const toast = await this.toastController.create({
        message: 'Quantidade do item de estoque foi atualizado com sucesso!',
        duration: 2000,
        color: 'success'
      });
      await toast.present();
      this.dismiss();
    } catch (error) {
      console.error(error);
      const toast = await this.toastController.create({
        message: 'Ocorreu um erro ao atualizar a quantidade do item de estoque',
        duration: 2000,
        color: 'danger'
      });
      await toast.present();
    }
  }

}
