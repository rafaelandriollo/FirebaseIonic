/* eslint-disable @typescript-eslint/dot-notation */
import { Produto } from './../models/Produto';
import { ProdutoService } from './../services/produto.service';
import { Component, OnInit } from '@angular/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public listaProdutos: Produto[] = [];
  orientacaoTela: string;

  constructor(private prodService: ProdutoService, private screenOrientation: ScreenOrientation, public toastController: ToastController) {

    this.orientacaoTela = this.screenOrientation.type;
    this.screenOrientation.onChange().subscribe(
      () => {
        this.orientacaoToast('Orientação de tela: ' + this.screenOrientation.type);
        this.orientacaoTela = this.screenOrientation.type;
      }
    );
  }

  ngOnInit() {
    this.buscarProdutos();
  }

  buscarProdutos() {
    this.prodService.buscarProdutos().subscribe(dadosRetorno => {
      this.listaProdutos = dadosRetorno.map(registro => (
        {
          id: registro.payload.doc.id,
          nome: registro.payload.doc.data()['nome'],
          valor: registro.payload.doc.data()['valor']
        }
      ));
    });
  }

  deletarProduto(id: string) {
    this.prodService.deletar(id);
    this.buscarProdutos();
  }

  async orientacaoToast(orientacao: string) {
    const toast = await this.toastController.create({
      message: orientacao,
      duration: 2000
    });
    toast.present();
  }

 /*verificarOrientacao() {
    window.addEventListener('orientationchange', () => {
    console.log(screen.orientation.type); // e.g. portrait
});
  }*/
}
