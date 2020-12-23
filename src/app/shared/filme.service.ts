import { Injectable } from '@angular/core';
import { Filme } from './filme';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  private filmes: Filme[];

  constructor() {
    this.filmes = new Array();
  }

  get() {
    return this.filmes;
  }

  excluir(filme: Filme) {
    this.filmes = this.filmes.filter((j) => j.codigo !== filme.codigo);
  }

  salvar(filme: Filme) {
    const indice = this.filmes.findIndex(j => j.codigo === filme.codigo);
    if(indice === -1) {
      this.filmes = [...this.filmes, filme];
    } else {
      this.filmes[indice] = {...filme};
    }
    console.log(this.filmes);
  }

  getCodigo() {
    return this.filmes.length + 1;
  }

  getFilme(codigo: number): Filme {
    return this.filmes.find(j => j.codigo === codigo);
  }
}
