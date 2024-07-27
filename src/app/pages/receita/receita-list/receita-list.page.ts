import { ReceitaService } from './../../../services/receita.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ReceitaFormComponent } from '../receita-form/receita-form.component';

@Component({
  selector: 'app-receita-list',
  templateUrl: './receita-list.page.html',
  styleUrls: ['./receita-list.page.scss'],
})
export class ReceitaListPage implements OnInit {

  constructor(private modalController: ModalController,
    private receitaService: ReceitaService
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

}
