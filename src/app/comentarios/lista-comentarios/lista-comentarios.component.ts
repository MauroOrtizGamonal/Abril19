import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lista-comentarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-comentarios.component.html',
  styleUrls: ['./lista-comentarios.component.css']
})
export class ListaComentariosComponent {
  @Input() comentarios: string[] | undefined; // Declara 'comentarios' como una propiedad de entrada
}
