import { ReceitaService } from './../../../services/receita.service';
import { Receita } from './../../../models/receita';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Producao } from 'src/app/models/producao';
import { ProducaoService } from 'src/app/services/producao.service';

@Component({
  selector: 'app-producao-form',
  templateUrl: './producao-form.component.html',
  styleUrls: ['./producao-form.component.scss'],
})
export class ProducaoFormComponent implements OnInit {

  @Input() producao?: Producao;

  novaProducao: Producao = {
    quantidadeReceitas: 1,
    receita: undefined
  };

  receitas: any[] = [];

  constructor(
    private modalController: ModalController,
    private producaoService: ProducaoService,
    private receitaService: ReceitaService,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    if (this.producao) {
      console.log('Produção recebida:', this.producao);
      this.novaProducao = { ...this.producao };
    }

    this.receitaService.getAll().subscribe(receitasResponse => {
      this.receitas = receitasResponse;
      console.log(this.receitas);
    });
  }

  dismiss() {
    this.modalController.dismiss();
  }

  async salvar() {
    try {
        if (this.novaProducao?.id) {
            // Exemplo para PUT, se necessário
            // await this.localEstoqueService.put(this.novaProducao).toPromise();
            // const toast = await this.toastController.create({
            //     message: 'Local de estoque alterado com sucesso!',
            //     duration: 2000,
            //     color: 'success'
            // });
            // await toast.present();
            // this.dismiss();
        } else {
            // Fazendo a chamada POST e esperando a resposta como texto
            const response = await this.producaoService.post(this.novaProducao).toPromise();

            // Se a resposta for texto, mostre a mensagem de sucesso com base na resposta
            const toast = await this.toastController.create({
                message: response || 'Produção inserida com sucesso!',
                duration: 2000,
                color: 'success'
            });
            await toast.present();
            this.dismiss();
        }
    } catch (error) {
        console.error(error);

        // Mensagem de erro ajustada
        const toast = await this.toastController.create({
            message: 'Ocorreu um erro ao salvar a produção.',
            duration: 2000,
            color: 'danger'
        });
        await toast.present();
    }
}

}
