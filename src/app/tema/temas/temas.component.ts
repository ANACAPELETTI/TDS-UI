import { Component, OnInit } from '@angular/core';
import { T } from 'chart.js/dist/chunks/helpers.core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

export interface IPessoa{
  id: number,
  tema_name: string,
  tema_orientador: string,
  tema_aluno: string,
  tema_coordenador: string
}

@Component({
  selector: 'app-temas',
  templateUrl: './temas.component.html',
  styleUrls: ['./temas.component.css']
})

export class TemasComponent {
  inventoryStatus!: Array<T>;
  pessoa! : IPessoa;
  setValue() {
    console.log(this.pessoa!.tema_name);
  }

  savePessoa() {
    if (this.pessoa.tema_name.trim()) {
        if (this.pessoa.id) {
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
        }
        else {
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
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
    private confirmationService: ConfirmationService
    ) {}

  productDialog: boolean = false;
  submitted: boolean = true;
  statuses: any[] = [];

  orientadores: IPessoa[] = [
    {
      id: 1,
      tema_name: "Teste 1",
      tema_orientador: "Evandro Alves Nakajima",
      tema_aluno: "Ana Paula Capeletti Ramos Almeida",
      tema_coordenador: "Giuvane Conti"
    },
    {
      id: 2,
      tema_name: "Teste 2",
      tema_orientador: "Evandro Alves Nakajima",
      tema_aluno: "Ana Paula Capeletti Ramos Almeida",
      tema_coordenador: "Giuvane Conti"
    },
    {
      id: 3,
      tema_name: "Teste 3",
      tema_orientador: "Evandro Alves Nakajima",
      tema_aluno: "Ana Paula Capeletti Ramos Almeida",
      tema_coordenador: ""
    }
  ]

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
  }

  editOrientador(orientador: IPessoa){
    this.pessoa = {...orientador};
    this.productDialog = true;
  }

  deletarOrientador(orientador: IPessoa){
    this.confirmationService.confirm({
      message: 'Você quer mesmo deletar ' + orientador.tema_name + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.orientadores = this.orientadores.filter(val => val.id !== orientador.id);
          this.pessoaSelecionada = [];
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
      }
    });
  }

  saveProduct() {
    this.submitted = true;
    this.messageService.add({severity:'success', summary: 'Sucesso', detail: 'Pessoa Alterada', life: 3000});
    this.orientadores = [...this.orientadores];
    this.productDialog = false;
  }


  openNew() {
    this.submitted = false;
    this.productDialog = true;
  }

  deletarOrientadoresSelecionados() {
    this.confirmationService.confirm({
      message: 'Você tem certeza que quer deletar esse tema?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.orientadores = this.orientadores.filter(val => !this.pessoaSelecionada.includes(val));
          this.pessoaSelecionada = [];
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
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
