import { Component, OnInit } from '@angular/core';
import { T } from 'chart.js/dist/chunks/helpers.core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

export interface IPessoa{
  id: number,
  pessoa_name: string,
  pessoa_telefone: string,
  pessoa_status: string,
  pessoa_imagem_link: string,
  pessoa_pontuacao: number,
  statuses: string
}

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  providers: [MessageService, ConfirmationService],
  styleUrls: ['./pessoa-cadastro.component.css']
})

export class PessoaCadastroComponent implements OnInit {

  inventoryStatus!: Array<T>;
  pessoa! : IPessoa;
  setValue() {
    console.log(this.pessoa!.pessoa_name);
  }

  savePessoa() {
    if (this.pessoa.pessoa_name.trim()) {
        if (this.pessoa.id) {
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'User Updated', life: 3000});
        }
        else {
            this.pessoa.pessoa_imagem_link = 'product-placeholder.svg';
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'User Created', life: 3000});
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
      pessoa_name: "Vera",
      pessoa_telefone: "45 988264663",
      pessoa_status: "Ativo",
      pessoa_imagem_link: "vera.png",
      pessoa_pontuacao: 3,
      statuses: "ALUNO"
    },
    {
      id: 2,
      pessoa_name: "Davi",
      pessoa_telefone: "45 988264663",
      pessoa_status: "Ativo",
      pessoa_imagem_link: "davi.png",
      pessoa_pontuacao: 4,
      statuses: "PROFESSOR"
    },
    {
      id: 3,
      pessoa_name: "Giuvane",
      pessoa_telefone: "45 988264663",
      pessoa_status: "Ativo",
      pessoa_imagem_link: "giuvane.png",
      pessoa_pontuacao: 5,
      statuses: "COORDENADOR"
    }
  ]

  pessoaSelecionada : IPessoa[] = [];

  ngOnInit() {
    this.statuses = [
      {label: 'ALUNO', value: 'aluno'},
      {label: 'PROFESSOR', value: 'professor'},
      {label: 'COORDENADOR', value: 'coordenador'}
    ];

    this.pessoa = {
      id: 0,
      pessoa_name: '',
      pessoa_telefone: '',
      pessoa_status: '',
      pessoa_imagem_link: '',
      pessoa_pontuacao: 0,
      statuses: ''
    }
  }

  editOrientador(orientador: IPessoa){
    this.pessoa = {...orientador};
    this.productDialog = true;
  }

  deletarOrientador(orientador: IPessoa){
    this.confirmationService.confirm({
      message: 'Você quer mesmo deletar ' + orientador.pessoa_name + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.orientadores = this.orientadores.filter(val => val.id !== orientador.id);
          this.pessoaSelecionada = [];
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'User Deleted', life: 3000});
      }
    });
  }

  saveProduct() {
    this.submitted = true;
    this.messageService.add({severity:'success', summary: 'Sucesso', detail: 'User Alterada', life: 3000});
    this.orientadores = [...this.orientadores];
    this.productDialog = false;
  }


  openNew() {
    this.submitted = false;
    this.productDialog = true;
  }

  deletarOrientadoresSelecionados() {
    this.confirmationService.confirm({
      message: 'Você tem certeza que quer deletar esse professor?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.orientadores = this.orientadores.filter(val => !this.pessoaSelecionada.includes(val));
          this.pessoaSelecionada = [];
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'User Delete', life: 3000});
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
