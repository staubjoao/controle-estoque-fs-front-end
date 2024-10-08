import { ItemEstoqueService } from 'src/app/services/item-estoque.service';
import { ItemEstoque } from './../../../models/item-estoque';
import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { ItemEstoqueFormComponent } from '../item-estoque-form/item-estoque-form.component';
import { ItemEstoqueQuantidadeFormComponent } from '../item-estoque-quantidade-form/item-estoque-quantidade-form.component';

@Component({
  selector: 'app-item-estoque-list',
  templateUrl: './item-estoque-list.page.html',
  styleUrls: ['./item-estoque-list.page.scss'],
})
export class ItemEstoqueListPage implements OnInit {

  itemEstoqueLista: ItemEstoque[] = [];

  constructor(private itemEstoqueService: ItemEstoqueService,
    private modalController: ModalController,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.findAllLocaisEstoque();
  }

  findAllLocaisEstoque() {
    this.itemEstoqueService.getAll().subscribe(
      (response) => {
        this.itemEstoqueLista = response;
      },
      (error) => {
        console.log(error);
      });
  }

  async abrirCadastro() {
    const modal = await this.modalController.create({
      component: ItemEstoqueFormComponent
    });

    modal.onDidDismiss().then(() => {
      this.findAllLocaisEstoque();
    });

    return await modal.present();
  }

  async alterarQuantidade(item: ItemEstoque) {
    const modal = await this.modalController.create({
      component: ItemEstoqueQuantidadeFormComponent,
      componentProps: {
        idItemEstoque: item.id
      }
    });

    modal.onDidDismiss().then(() => {
      this.findAllLocaisEstoque();
    });

    return await modal.present();
  }

  async alterarLocal(item: ItemEstoque) {
    const modal = await this.modalController.create({
      component: ItemEstoqueFormComponent,
      componentProps: {
        itemEstoque: item
      }
    });

    modal.onDidDismiss().then(() => {
      this.findAllLocaisEstoque();
    });

    return await modal.present();
  }

  async excluirLocal(itemId: number) {
    try {
        await this.itemEstoqueService.delete(itemId).toPromise();
        this.findAllLocaisEstoque();
        const toast = await this.toastController.create({
          message: 'Item de estoque excluido com sucesso!',
          duration: 2000,
          color: 'success'
        });
        await toast.present();
    } catch (error) {
      console.error(error);
      const toast = await this.toastController.create({
        message: 'Ocorreu um erro ao excluir o item de estoque.',
        duration: 2000,
        color: 'danger'
      });
      await toast.present();
    }
  }
}
