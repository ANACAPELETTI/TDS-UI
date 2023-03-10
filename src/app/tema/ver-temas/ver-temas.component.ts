import { Component, OnInit } from '@angular/core';
import { T } from 'chart.js/dist/chunks/helpers.core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { BuscarTrabalhosService } from 'src/app/services/trabalho/buscarTrabalhos/buscar-trabalhos.service';

export interface IPessoa{
  id: number,
  tema_name: string,
  tema_orientador: string,
  tema_aluno: string,
  tema_coordenador: string
}

@Component({
  selector: 'app-ver-temas',
  templateUrl: './ver-temas.component.html',
  styleUrls: ['./ver-temas.component.css']
})

export class VerTemasComponent {

    inventoryStatus!: Array<T>;
    pessoa! : IPessoa;
    setValue() {
      console.log(this.pessoa!.tema_name);
    }

    savePessoa() {
      if (this.pessoa.tema_name.trim()) {
          if (this.pessoa.id) {
              this.messageService.add({severity:'success', summary: 'Successful', detail: 'Tema Updated', life: 3000});
          }
          else {
              this.messageService.add({severity:'success', summary: 'Successful', detail: 'Tema Created', life: 3000});
          }

          this.orientadores = [...this.orientadores];
          this.productDialog = false;
      }
    }

    hideDialog() {
      this.productDialog = false;
      this.submitted = false;
    }

    constructor(
      private messageService: MessageService,
      private confirmationService: ConfirmationService,
      private buscarTrabalhosService: BuscarTrabalhosService,
      private localStorageService: LocalStorageService
      ) {}

    productDialog: boolean = false;
    submitted: boolean = true;
    statuses: any[] = [];

    orientadores: IPessoa[] = [];

    pessoaSelecionada : IPessoa[] = [];

    ngOnInit() {
      this.statuses = [
        {label: 'GIUVANE CONTI', value: 'Giuvane Conti'},
        {label: 'EVANDRO ALVES NAKAJIMA', value: 'Evandro Alves Nakajima'},
        {label: 'THIAGO NAVES', value: 'Thiago Naves'}
      ];

      this.pessoa = {
        id: 0,
        tema_name: '',
        tema_orientador: '',
        tema_aluno: '',
        tema_coordenador: ''
      }

      this.buscarTrabalhosService.Execute({token: this.localStorageService.get("token")}).subscribe((retorno)=>{
        let i = 0;
        for (const orientador of retorno) {
          if(orientador.trabalhoPessoa[0].trabalhoCoorientador){
            this.orientadores.push({id: i, tema_aluno: orientador.trabalhoPessoa[0].trabalhoAluno.nome, tema_orientador: orientador.trabalhoPessoa[0].trabalhoOrientador.nome, tema_coordenador: orientador.trabalhoPessoa[0].trabalhoCoorientador.nome, tema_name: orientador.tema});
          } else {
            this.orientadores.push({id: i, tema_aluno: orientador.trabalhoPessoa[0].trabalhoAluno.nome, tema_orientador: orientador.trabalhoPessoa[0].trabalhoOrientador.nome, tema_coordenador: "", tema_name: orientador.tema});
          }
          i++;
        }
      });
    }

    editOrientador(orientador: IPessoa){
      this.pessoa = {...orientador};
      this.productDialog = true;
    }

    deletarOrientador(orientador: IPessoa){
      this.confirmationService.confirm({
        message: 'Voc?? quer mesmo deletar ' + orientador.tema_name + '?',
        header: 'Confirmar',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.orientadores = this.orientadores.filter(val => val.id !== orientador.id);
            this.pessoaSelecionada = [];
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'Tema Deleted', life: 3000});
        }
      });
    }

    saveProduct() {
      this.submitted = true;
      this.messageService.add({severity:'success', summary: 'Sucesso', detail: 'Tema Alterada', life: 3000});
      this.orientadores = [...this.orientadores];
      this.productDialog = false;
    }


    openNew() {
      this.submitted = false;
      this.productDialog = true;
    }

    deletarOrientadoresSelecionados() {
      this.confirmationService.confirm({
        message: 'Voc?? tem certeza que quer deletar esse tema?',
        header: 'Confirmar',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.orientadores = this.orientadores.filter(val => !this.pessoaSelecionada.includes(val));
            this.pessoaSelecionada = [];
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'Tema Deleted', life: 3000});
        }
      });
    }

    createId(): string {
      let id = '';
      var chars = '0123456789';
      for ( var i = 0; i < 5; i++ ) {
          id += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return id;
  }
  }
