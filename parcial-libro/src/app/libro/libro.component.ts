import { Component } from '@angular/core';
import { Libro } from './libro';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent {

  libros: Libro[] = [];
  nuevoLibro: Libro = new Libro("Don quijote", "gerardro", "sur");

  constructor(private http: HttpClient){}

  gLibro(): void {
    this.libros.push(this.nuevoLibro);
  }

  obtenerLibros(){
    return this.http.get<Libro[]>();
  }

}
