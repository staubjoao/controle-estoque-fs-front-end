import { ItemEstoqueService } from 'src/app/services/item-estoque.service';
import { ItemEstoque } from './../../../models/item-estoque';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ItemEstoqueFormComponent } from '../item-estoque-form/item-estoque-form.component';

@Component({
  selector: 'app-item-estoque-list',
  templateUrl: './item-estoque-list.page.html',
  styleUrls: ['./item-estoque-list.page.scss'],
})
export class ItemEstoqueListPage implements OnInit {

  itemEstoqueLista: ItemEstoque[] = [];

  constructor(private itemEstoqueService: ItemEstoqueService,
    private modalController: ModalController
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

  async alterarLocal(item: ItemEstoque) {
    // const modal = await this.modalController.create({
    //   component: LocalEstoqueFormComponent,
    //   componentProps: {
    //     local: local
    //   }
    // });

    // modal.onDidDismiss().then(() => {
    //   this.findAllLocaisEstoque();
    // });

    // return await modal.present();
  }

  async excluirLocal(itemId: number) {
    // try {
    //     await this.localEstoqueService.delete(localId).toPromise();
    //     this.findAllLocaisEstoque();
    //     const toast = await this.toastController.create({
    //       message: 'Local de estoque excluido com sucesso!',
    //       duration: 2000,
    //       color: 'success'
    //     });
    //     await toast.present();
    // } catch (error) {
    //   console.error(error);
    //   const toast = await this.toastController.create({
    //     message: 'Ocorreu um erro ao excluir o local de estoque.',
    //     duration: 2000,
    //     color: 'danger'
    //   });
    //   await toast.present();
    // }
  }
}
