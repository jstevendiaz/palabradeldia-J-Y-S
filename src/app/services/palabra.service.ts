// palabra.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PalabraService {
  private url = 'assets/palabras.json'; // Ruta al archivo JSON

  constructor(private http: HttpClient) {}

  // Método para obtener una palabra aleatoria del archivo JSON
  getPalabraAleatoria(): Observable<string> {
    return this.http.get<{ palabras: { palabra: string }[] }>(this.url).pipe(
      map(data => {
        const palabras = data.palabras;
        const palabraAleatoria = palabras[Math.floor(Math.random() * palabras.length)].palabra;
        return palabraAleatoria;
      })
    );
  }
}
