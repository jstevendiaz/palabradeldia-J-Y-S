import { Component, OnInit } from '@angular/core';
import { PalabraService } from 'src/app/services/palabra.service';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.sass']
})
export class TableroComponent implements OnInit {
  public palabra: string = '';
  public letrasPalabra: string[] = [];
  public intentos: string[] = [];
  public resultadoIntento: string[] = [];
  public intentosRestantes: number = 6;
  public adivinado: boolean = false;

  constructor(public palabraSer: PalabraService) { }

  ngOnInit(): void {
    this.palabraSer.getPalabraAleatoria().subscribe((palabra: string) => {
      this.palabra = palabra;
      this.letrasPalabra = this.palabra.split('');
      this.intentos = new Array(this.letrasPalabra.length).fill('');
      this.resultadoIntento = new Array(this.letrasPalabra.length).fill('');
    });
  }
  enviarIntento(): void {
    this.resultadoIntento = this.intentos.map((letra, index) => {
      if (this.letrasPalabra[index] === letra) {
        return 'verde'; // Letra correcta en verde
      } else if (this.letrasPalabra.includes(letra)) {
        return 'amarillo'; // Letra incorrecta en amarillo
      } else {
        return 'gris'; // Letra no presente en gris
      }
    });
    if (this.intentos.join('') === this.palabra) {
      this.adivinado = true; // Si el usuario adivinó la palabra
    } else {
      this.intentosRestantes--; // Reducir los intentos restantes
      if (this.intentosRestantes === 0) {
        // Implementar lógica si el usuario ha agotado todos los intentos
      }

    }
  }
}

