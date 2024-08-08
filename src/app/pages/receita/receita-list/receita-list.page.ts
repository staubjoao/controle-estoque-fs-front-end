import { ReceitaService } from './../../../services/receita.service';
import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { ReceitaFormComponent } from '../receita-form/receita-form.component';

@Component({
  selector: 'app-receita-list',
  templateUrl: './receita-list.page.html',
  styleUrls: ['./receita-list.page.scss'],
})
export class ReceitaListPage implements OnInit {

  constructor(private modalController: ModalController,
    private receitaService: ReceitaService,
    private toastController: ToastController
  ) { }

  receitaLista: any[] = [];

  ngOnInit() {
    this.findAllReceitas();
  }

  findAllReceitas() {
    this.receitaService.getAll().subscribe(
      (response) => {
        console.log(response);
        this.receitaLista = response;
      },
      (error) => {
        console.log(error);
      });
  }

  async abrirCadastro() {
    const modal = await this.modalController.create({
      component: ReceitaFormComponent
    });

    modal.onDidDismiss().then(() => {
      this.findAllReceitas();
    });

    return await modal.present();
  }

  async alterarReceita(receita: any) {
    const modal = await this.modalController.create({
      component: ReceitaFormComponent,
      componentProps: {
        receita: receita
      }
    });

    modal.onDidDismiss().then(() => {
      this.findAllReceitas();
    });

    return await modal.present();
  }

  async excluirReceita(receitaId: number) {
    try {
        await this.receitaService.delete(receitaId).toPromise();
        this.findAllReceitas();
        const toast = await this.toastController.create({
          message: 'Receita excluida com sucesso!',
          duration: 2000,
          color: 'success'
        });
        await toast.present();
    } catch (error) {
      console.error(error);
      const toast = await this.toastController.create({
        message: 'Ocorreu um erro ao excluir a receita.',
        duration: 2000,
        color: 'danger'
      });
      await toast.present();
    }
  }

}
