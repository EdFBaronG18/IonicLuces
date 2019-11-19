import { Component } from '@angular/core';
import { EstadoLucesService } from '../services/estado-luces.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  estado = {};

  constructor(private status: EstadoLucesService) {

    this.status.getStatus().subscribe(res => {
      this.estado = res;
    });
  }

  setStatusLuces() {
    console.log(this.estado);
    this.status.setStatus(this.estado).subscribe();
  }
  segmentChanged(ev){
   // 
  }
}
