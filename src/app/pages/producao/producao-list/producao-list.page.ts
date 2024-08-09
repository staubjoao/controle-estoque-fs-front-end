import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Producao } from 'src/app/models/producao';
import { ProducaoService } from 'src/app/services/producao.service';
import { ProducaoFormComponent } from '../producao-form/producao-form.component';

@Component({
  selector: 'app-producao-list',
  templateUrl: './producao-list.page.html',
  styleUrls: ['./producao-list.page.scss'],
})
export class ProducaoListPage implements OnInit {
  producoes: Producao[] = [];

  constructor(private modalController: ModalController,
    private producaoService: ProducaoService,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.findAllLocaisEstoque();
  }

  findAllLocaisEstoque() {
    this.producaoService.getAll().subscribe(
      (response) => {
        this.producoes = response;
      },
      (error) => {
        console.log(error);
      });
  }

  async abrirCadastro() {
    const modal = await this.modalController.create({
      component: ProducaoFormComponent
    });

    modal.onDidDismiss().then(() => {
      this.findAllLocaisEstoque();
    });

    return await modal.present();
  }

  async alterarLocal(producao: Producao) {
    const modal = await this.modalController.create({
      component: ProducaoFormComponent,
      componentProps: {
        producao: producao
      }
    });

    modal.onDidDismiss().then(() => {
      this.findAllLocaisEstoque();
    });

    return await modal.present();
  }

  async excluirLocal(localId: number) {
    // try {
    //   await this.producaoService.delete(localId).toPromise();
    //   this.findAllLocaisEstoque();
    //   const toast = await this.toastController.create({
    //     message: 'Local de estoque excluido com sucesso!',
    //     duration: 2000,
    //     color: 'success'
    //   });
    //   await toast.present();
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
