import { BuscarOrientadoresService } from './../services/orientador/buscarOrientadores/buscar-orientadores.service';
import { CarouselModule } from 'primeng/carousel';
import { Component, Injectable, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

interface IProfs{
  id: string,
  prof_name: string,
  prof_image: string,
  prof_description: string,
  prof_email: string,
  prof_telefone: string
}

@Component({
  selector: 'app-orientadores',
  templateUrl: './orientadores.component.html',
  styleUrls: ['./orientadores.component.css']
})

export class OrientadoresComponent {
    profs : IProfs[] = [];
      responsiveOptions;

      constructor(
        private buscarOrientadoresService : BuscarOrientadoresService,
      ) {
        this.responsiveOptions = [
                {
                    breakpoint: '1024px',
                    numVisible: 3,
                    numScroll: 3
                },
                {
                    breakpoint: '768px',
                    numVisible: 2,
                    numScroll: 2
                },
                {
                    breakpoint: '560px',
                    numVisible: 1,
                    numScroll: 1
                }
            ];
      }

      showEmail(emailProf: string) {
        alert(emailProf);
      }

      showTelefone(telefoneProf: string) {
        alert(telefoneProf);
      }

      ngOnInit() {
        this.buscarOrientadoresService.Execute().subscribe((retorno)=>{
          console.log(retorno);
          for (const orientador of retorno) {
            this.profs.push({id: orientador.id, prof_description: orientador.pessoa.descricao, prof_email: orientador.email, prof_image: "../../assets/"+orientador.pessoa.imagemCaminho, prof_name: orientador.pessoa.nome, prof_telefone: orientador.pessoa.telefone[0].numero})
          }
        });
      }
    }
