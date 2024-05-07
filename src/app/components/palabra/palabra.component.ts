import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-palabra',
  templateUrl: './palabra.component.html',
  styleUrls: ['./palabra.component.sass']
})
export class PalabraComponent {
  @Input() letras: string[] = [];
  @Input() intentos: string[] = [];

  constructor() { }

  getClase(indice: number): string {
    if (this.intentos[indice] === 'verde') {
      return 'verde';
    } else if (this.intentos[indice] === 'amarillo') {
      return 'amarillo';
    } else {
      return 'gris';
    }
  }
}
