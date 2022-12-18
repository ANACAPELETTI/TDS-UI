import { Component } from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  title = 'tdsmoney-ui';
  items: MenuItem[] = [];

    ngOnInit() {
        this.items = [
            {
              label: 'Home',
              icon: 'pi pi-fw pi-home',
              routerLink: ['/home']
            },
            {
                label: 'Cadastro',
                icon: 'pi pi-fw pi-pencil',
                items: [{
                        label: 'Novo',
                        icon: 'pi pi-fw pi-plus',
                        items: [
                            {
                              label: 'Usuário',
                              icon: 'pi pi-fw pi-user',
                              routerLink: ['/home/pessoa']
                            },
                            {
                              label: 'Tema',
                              icon: 'pi pi-fw pi-paperclip',
                              routerLink: ['/home/temas']
                            },
                        ]
                    },
                    {
                      label: 'Sair',
                      icon: 'pi pi-fw pi-sign-in'
                    }
                ]
            },
            {
                label: 'Temas',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {label: 'Ver temas',
                    icon: 'pi pi-fw pi-book',
                    routerLink: ['/home/verTemas']
                    },
                    {label: 'Meus temas',
                    icon: 'pi pi-fw pi-file-edit',
                    routerLink: ['/home/meusTemas']
                    }
                ]
            },
            {
                label: 'Ranking',
                icon: 'pi pi-fw pi-chart-bar',
                routerLink: ['/home/ranking']
            }
        ];
    }
}
