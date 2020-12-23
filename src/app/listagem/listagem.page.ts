import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Filme } from '../shared/filme';
import { FilmeService } from '../shared/filme.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.page.html',
  styleUrls: ['./listagem.page.scss'],
})
export class ListagemPage implements OnInit {

  listaFilme: Filme[];

  constructor(
    private FilmeService: FilmeService,
    private router: Router
  ) {
    this.listar();
  }

  ngOnInit() {}

  ionViewWillEnter() {
    this.listar();
  }

  listar() {
    this.listaFilme = this.FilmeService.get();
    console.log('editar' + this.listaFilme);
  }

  editar(Filme: Filme) {
    this.router.navigate(['cadastro', Filme.codigo]);
  }

  excluir(Filme: Filme) {
    this.FilmeService.excluir(Filme);
    this.listar();
  }

}
