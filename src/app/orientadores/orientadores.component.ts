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
    profs : IProfs[] = [
      {
        id: "1",
        prof_name: "Giuvane Conti",
        prof_image: "../../assets/giuvane.png",
        prof_description: "Doutorando no programa de pós graduação em Engenharia Agrícola pela Universidade do Oeste do Paraná - Unioeste. Áreas de interesse: Desenvolvimento para dispositivos móveis e Jogos.",
        prof_email: "giuvaneconti@utfpr.edu.br",
        prof_telefone: "(45) 2537-1619"
      },
      {
        id: "2",
        prof_name: "Angaldo da Costa",
        prof_image: "../../assets/agnaldo.png",
        prof_description: "Doutor em Ensino de Ciências e Tecnologia (UTFPR-PR), Mestrado em Computação Aplicadas (Univali). Suas áreas de interesse incluem: Sistemas Operacionais, Mineração de Dados e Informática Educacional.",
        prof_email: "agnaldocosta@utfpr.edu.br",
        prof_telefone: "(45) 2163-5643"
      },
      {
        id: "3",
        prof_name: "Davi Marcondes Rocha",
        prof_image: "../../assets/davi.png",
        prof_description: "Doutorado em Engenharia Agrícola na Universidade Estadual do Oeste do Paraná. Suas áreas de interesse incluem: Análise/Processamento Digital de Imagens, Computação Gráfica, Geoprocessamento e Engenharia de Software.",
        prof_email: "davirocha@utfpr.edu.br",
        prof_telefone: "(45) 2771-2281"
      },
      {
        id: "4",
        prof_name: "Vera Lucia Vasilevski dos Santos Araujo",
        prof_image: "../../assets/vera.png",
        prof_description: "Suas áreas de interesse incluem: Neurociência na aprendizagem, Aquisição da linguagem, Leitura e produção textual, Linguística computacional (desenvolvimento de softwares para PLN - fonologia, morfologia e Leitura).",
        prof_email: "vera.2015@alunos.utfpr.edu.br",
        prof_telefone: "(45) 3651-8824"
      }
    ];
      responsiveOptions;

      constructor() {
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
      }
    }
