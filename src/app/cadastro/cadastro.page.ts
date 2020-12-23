import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Filme } from '../shared/filme';
import { FilmeService } from '../shared/filme.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  filme: Filme;

  constructor(
    private filmeService: FilmeService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { 
    this.filme = new Filme();    
    
    const codigo = parseInt(this.activatedRoute.snapshot.paramMap.get('codigo'));
    if(codigo) {
      this.filme = this.filmeService.getFilme(codigo);
      if(this.filme.dataLancamento instanceof Date) {
        this.filme.dataLancamento = this.filme.dataLancamento.toISOString();
      }
    } else {
      this.filme.codigo = this.filmeService.getCodigo();
    }
  }

  ngOnInit() {
  }

  salvar() {
    this.filmeService.salvar(this.filme);    
    this.router.navigate(['listagem']);
  }

}
