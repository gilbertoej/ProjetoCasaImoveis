import { Component, Input, OnInit } from '@angular/core';
import { ImoveisApiModel } from 'src/app/services/imoveis-api-model';
import { ImoveisApiService } from 'src/app/services/imoveis-api.service';


@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})
export class SlideShowComponent implements OnInit {
  atual= 0;
  @Input() casas: ImoveisApiModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  nextSlide(){
    this.atual = Math.min(this.casas.length - 1, this.atual + 1);
  }
  prevSlide(){
    this.atual = Math.max(0, this.atual - 1);
  }
}
