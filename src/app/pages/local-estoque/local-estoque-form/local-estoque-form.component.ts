import { LocalEstoqueService } from './../../../services/local-estoque.service';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { LocalEstoque } from 'src/app/models/local-estoque';

@Component({
  selector: 'app-local-estoque-form',
  templateUrl: './local-estoque-form.component.html',
  styleUrls: ['./local-estoque-form.component.scss'],
})
export class LocalEstoqueFormComponent implements OnInit {

  @Input() local?: LocalEstoque;

  novoLocal: LocalEstoque = {
    descricao: ''
  };

  constructor(
    private modalController: ModalController,
    private localEstoqueService: LocalEstoqueService,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    if (this.local) {
      console.log('Local recebido:', this.local);
      this.novoLocal = { ...this.local };
    }
  }

  dismiss() {
    this.modalController.dismiss();
  }

  async salvar() {
    try {
      if (this.novoLocal?.id) {
        await this.localEstoqueService.put(this.novoLocal).toPromise();
        const toast = await this.toastController.create({
          message: 'Local de estoque alterado com sucesso!',
          duration: 2000,
          color: 'success'
        });
        await toast.present();
        this.dismiss();
      } else {
        await this.localEstoqueService.post(this.novoLocal).toPromise();
        const toast = await this.toastController.create({
          message: 'Local de estoque salvo com sucesso!',
          duration: 2000,
          color: 'success'
        });
        await toast.present();
        this.dismiss();
      }
    } catch (error) {
      console.error(error);
      const toast = await this.toastController.create({
        message: this.local?.id ? 'Ocorreu um erro ao alterar o local de estoque.' : 'Ocorreu um erro ao salvar o local de estoque.',
        duration: 2000,
        color: 'danger'
      });
      await toast.present();
    }
  }
}
