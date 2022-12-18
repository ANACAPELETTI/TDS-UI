import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Product {
  id: string;
  name: string;
  telefone: string;
}

@Injectable()
export class ProductService {
    status: string[] = ['ALUNO', 'PROFESSOR', 'COORDENADOR'];

    productNames: string[] = [
        'Bamboo Watch',
        'Black Watch',
        'Blue Band',
        'Blue T-Shirt',
        'Bracelet',
        'Brown Purse',
        'Chakra Bracelet',
        'Galaxy Earrings',
        'Game Controller',
        'Gaming Set',
        'Gold Phone Case',
        'Green Earbuds',
        'Green T-Shirt',
        'Grey T-Shirt',
        'Headphones',
        'Light Green T-Shirt'
    ];

    productTelefones: string[] = [
      '45 999886746',
      '45 999886746',
      '45 999886746',
      '45 999886746',
      '45 999886746',
      '45 999886746',
      '45 999886746',
      '45 999886746',
      '45 999886746',
      '45 999886746',
      '45 999886746',
      '45 999886746',
      '45 999886746',
      '45 999886746',
      '45 999886746',
      '45 999886746',
  ];

    constructor(private http: HttpClient) {}

    getProductsSmall() {
        return this.http
            .get<any>('assets/showcase/data/products-small.json')
            .toPromise()
            .then((res) => <Product[]>res.data)
            .then((data) => {
                return data;
            });
    }

    getProducts() {
        return this.http
            .get<any>('assets/showcase/data/products.json')
            .toPromise()
            .then((res) => <Product[]>res.data)
            .then((data) => {
                return data;
            });
    }

    getProductsWithOrdersSmall() {
        return this.http
            .get<any>('assets/showcase/data/products-orders-small.json')
            .toPromise()
            .then((res) => <Product[]>res.data)
            .then((data) => {
                return data;
            });
    }

    generatePrduct(): Product {
        const product: Product = {
            id: this.generateId(),
            name: this.generateName(),
            telefone: this.generateTelefone()
        };
        return product;
    }

    generateTelefone(): string {
      return this.productTelefones[Math.floor(Math.random() * Math.floor(16))];
    }

    generateId() {
        let text = '';
        let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (var i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return text;
    }

    generateName() {
        return this.productNames[Math.floor(Math.random() * Math.floor(16))];
    }

    generateQuantity() {
        return Math.floor(Math.random() * Math.floor(75) + 1);
    }

    generateStatus() {
        return this.status[Math.floor(Math.random() * Math.floor(3))];
    }

    generateRating() {
        return Math.floor(Math.random() * Math.floor(5) + 1);
    }
}
