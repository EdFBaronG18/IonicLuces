import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstadoLucesService {

  constructor(private http: HttpClient) {
  }

  getStatus(): Observable<any> {
    return this.http.get(environment.urlGetStatus);
  }

  setStatus(body): Observable<any> {
    return this.http.post(environment.urlSetStatus, body);
  }
}
