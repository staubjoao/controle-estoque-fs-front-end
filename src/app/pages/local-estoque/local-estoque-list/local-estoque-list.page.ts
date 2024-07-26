import { LocalEstoqueService } from './../../../services/local-estoque.service';
import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { LocalEstoqueFormComponent } from '../local-estoque-form/local-estoque-form.component';
import { LocalEstoque } from 'src/app/models/local-estoque';

@Component({
  selector: 'app-local-estoque-list',
  templateUrl: './local-estoque-list.page.html',
  styleUrls: ['./local-estoque-list.page.scss'],
})
export class LocalEstoqueListPage implements OnInit {
  locaisEstoque: LocalEstoque[] = [];

  constructor(private modalController: ModalController,
    private localEstoqueService: LocalEstoqueService,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.findAllLocaisEstoque();
  }

  findAllLocaisEstoque() {
    this.localEstoqueService.getAll().subscribe(
      (response) => {
        this.locaisEstoque = response;
      },
      (error) => {
        console.log(error);
      });
  }

  async abrirCadastro() {
    const modal = await this.modalController.create({
      component: LocalEstoqueFormComponent
    });

    modal.onDidDismiss().then(() => {
      this.findAllLocaisEstoque();
    });

    return await modal.present();
  }

  async alterarLocal(local: LocalEstoque) {
    const modal = await this.modalController.create({
      component: LocalEstoqueFormComponent,
      componentProps: {
        local: local
      }
    });

    modal.onDidDismiss().then(() => {
      this.findAllLocaisEstoque();
    });

    return await modal.present();
  }

  async excluirLocal(localId: number) {
    try {
        await this.localEstoqueService.delete(localId).toPromise();
        this.findAllLocaisEstoque();
        const toast = await this.toastController.create({
          message: 'Local de estoque excluido com sucesso!',
          duration: 2000,
          color: 'success'
        });
        await toast.present();
    } catch (error) {
      console.error(error);
      const toast = await this.toastController.create({
        message: 'Ocorreu um erro ao excluir o local de estoque.',
        duration: 2000,
        color: 'danger'
      });
      await toast.present();
    }
  }

}
