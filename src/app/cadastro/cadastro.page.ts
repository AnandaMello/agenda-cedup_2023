import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  public materia: string = '';
  public descricao: string = '';
  public datahora: string = ''; 

  constructor(
    public Localstorage_service:LocalStorageService
  ) { }

  ngOnInit() {
    console.log(this.Localstorage_service.get('compromisso'));
  }

  salvar(){
    let compromisso = {
     materia:this.materia,
     descricao:this.descricao  
    
    };
    
    this.Localstorage_service.post( 'compromisso', compromisso);
    alert('Salvo com sucesso ');

  }

}
