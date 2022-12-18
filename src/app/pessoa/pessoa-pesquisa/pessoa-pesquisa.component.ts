import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-pessoa-pesquisa',
  templateUrl: './pessoa-pesquisa.component.html',
  providers: [MessageService],
  styleUrls: ['./pessoa-pesquisa.component.css']
})

export class PessoaPesquisaComponent implements OnInit {

    ngOnInit() {
    }
}
