import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nuevo-comentario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nuevo-comentario.component.html',
  styleUrls: ['./nuevo-comentario.component.css']
})
export class NuevoComentarioComponent implements OnInit {
  @Output() comentarioNuevo = new EventEmitter<string>();
  comentario = '';

  constructor() { }

  ngOnInit(): void {
  }

  agregarComentario(): void {
    this.comentarioNuevo.emit(this.comentario);
    this.comentario = '';
  }
}
