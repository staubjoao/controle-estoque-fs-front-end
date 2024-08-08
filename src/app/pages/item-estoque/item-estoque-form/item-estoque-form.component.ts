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
  selector: 'app-item-estoque-form',
  templateUrl: './item-estoque-form.component.html',
  styleUrls: ['./item-estoque-form.component.scss'],
})
export class ItemEstoqueFormComponent  implements OnInit {

  @Input() itemEstoque?: ItemEstoque;

  novoItemEstoque: ItemEstoque = {
    descricao: '',
    grandeza: Grandeza.GRAMAS,
    quantidade: 0,
    localEstoqueId: 0
  };

  locaisEstoque: LocalEstoque[] = [];
  grandezas = Object.values(Grandeza);

  constructor(
    private modalController: ModalController,
    private itemEstoqueService: ItemEstoqueService,
    private localEstoqueService: LocalEstoqueService,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    if (this.itemEstoque) {
      console.log('Item recebido:', this.itemEstoque);
      this.novoItemEstoque = { ...this.itemEstoque };
    }

    this.localEstoqueService.getAll().subscribe(locais => {
      this.locaisEstoque = locais;
    });
  }

  dismiss() {
    this.modalController.dismiss();
  }

  async salvar() {
    try {
      if (this.novoItemEstoque?.id) {
        await this.itemEstoqueService.put(this.novoItemEstoque).toPromise();
        const toast = await this.toastController.create({
          message: 'Item de estoque alterado com sucesso!',
          duration: 2000,
          color: 'success'
        });
        await toast.present();
        this.dismiss();
      } else {
        await this.itemEstoqueService.post(this.novoItemEstoque).toPromise();
        const toast = await this.toastController.create({
          message: 'Item de estoque salvo com sucesso!',
          duration: 2000,
          color: 'success'
        });
        await toast.present();
        this.dismiss();
      }
    } catch (error) {
      console.error(error);
      const toast = await this.toastController.create({
        message: this.itemEstoque?.id ? 'Ocorreu um erro ao alterar o item de estoque.' : 'Ocorreu um erro ao salvar o item de estoque.',
        duration: 2000,
        color: 'danger'
      });
      await toast.present();
    }
  }

}
