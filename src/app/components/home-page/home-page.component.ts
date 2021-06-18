import { Component, OnInit } from '@angular/core';
import { ImoveisApiModel } from 'src/app/services/imoveis-api-model';
import { ImoveisApiService } from 'src/app/services/imoveis-api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  listaCasas: ImoveisApiModel[] = [{
    address:'',
    image: '',
    owner: '',
    price: 0,
    type: ''}];

  constructor(public casasApi: ImoveisApiService) { }

  ngOnInit(): void {
    this.casasApi.getImovel().subscribe({
      next: (retornoDaApi) => {
        this.listaCasas = retornoDaApi;
      }
    });
  }

}
