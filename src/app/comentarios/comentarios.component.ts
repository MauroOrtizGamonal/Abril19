import { Component, OnInit } from '@angular/core';
import { NuevoComentarioComponent } from "./nuevo-comentario/nuevo-comentario.component";
import { ListaComentariosComponent } from "./lista-comentarios/lista-comentarios.component";

@Component({
    selector: 'app-comentarios',
    standalone: true,
    templateUrl: './comentarios.component.html',
    styleUrl: './comentarios.component.css',
    imports: [NuevoComentarioComponent, ListaComentariosComponent]
})
export class ComentariosComponent implements OnInit {
  comentarios = ['Comentario 1', 'Comentario 2', 'Comentario 3'];

  constructor() { }

  ngOnInit(): void {
  }

  agregarComentario(comentario: string): void {
    this.comentarios.push(comentario);
  }
}
