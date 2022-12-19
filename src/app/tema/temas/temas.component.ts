import { Component, OnInit } from '@angular/core';
import { T } from 'chart.js/dist/chunks/helpers.core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { BuscarAlunosService } from 'src/app/services/aluno/buscarAlunos/buscar-alunos.service';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { BuscarOrientadoresService } from 'src/app/services/orientador/buscarOrientadores/buscar-orientadores.service';
import { BuscarTrabalhosService } from 'src/app/services/trabalho/buscarTrabalhos/buscar-trabalhos.service';
import { CriarTrabalhoService } from 'src/app/services/trabalho/criarTrabalho/criar-trabalho.service';

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
    private criarTrabalhoService: CriarTrabalhoService,
    private buscarTrabalhosService: BuscarTrabalhosService,
    private localStorageService: LocalStorageService,
    private buscarOrientadoresService: BuscarOrientadoresService,
    private buscarAlunosService: BuscarAlunosService
    ) {}

  productDialog: boolean = false;
  submitted: boolean = true;
  statuses: any[] = [];
  alunos: any[] = [];
  orientadores: IPessoa[] = [];

  pessoaSelecionada : IPessoa[] = [];

  ngOnInit() {
    this.statuses = [];

    this.buscarOrientadoresService.Execute().subscribe((retorno)=>{
      // console.log(retorno);
      for (const _pessoa of retorno) {
        this.statuses.push({label: _pessoa.pessoa.nome, value: _pessoa.pessoa.id});
      }
    });

    this.alunos = [];
    this.buscarAlunosService.Execute().subscribe((retorno)=>{
      console.log(retorno);
      for (const _pessoa of retorno) {
        this.alunos.push({label: _pessoa.pessoa.nome, value: _pessoa.pessoa.id});
      }
    });

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
      message: 'Você quer mesmo deletar "' + orientador.tema_name + '" ?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.orientadores = this.orientadores.filter(val => val.id !== orientador.id);
          this.pessoaSelecionada = [];
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Tema Deleted', life: 3000});
      }
    });
  }

  CriarTrabalho(){
    console.log(this.localStorageService.get("token"));
    console.log(this.pessoa.tema_aluno);
    console.log(this.pessoa.tema_orientador);
    console.log(this.pessoa.tema_aluno);
    this.criarTrabalhoService.Execute({tema:this.pessoa.tema_name, descricao:"", idAluno:this.pessoa.tema_aluno, idOrientador: this.pessoa.tema_orientador,idCoorientador: this.pessoa.tema_coordenador, token:this.localStorageService.get("token")}).subscribe((retorno)=>{
      // this.orientadores.push({id:retorno.id, tema_aluno: this.pessoa.tema_aluno, tema_orientador: this.pessoa.tema_orientador, tema_coordenador:"", tema_name: this.pessoa.tema_name})
      this.orientadores.push({id:retorno.id, tema_aluno: this.alunos.find(aluno => aluno.value == this.pessoa.tema_aluno).label, tema_orientador: this.statuses.find(orientador => orientador.value == this.pessoa.tema_orientador).label, tema_coordenador: this.statuses.find(coorientador => coorientador.value == this.pessoa.tema_coordenador).label, tema_name: this.pessoa.tema_name})
    })
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
