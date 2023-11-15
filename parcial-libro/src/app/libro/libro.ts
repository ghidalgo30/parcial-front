export class Libro {
    nombre: string;
    autor: string;
    biblioteca: string;
  
    constructor(nombre: string, autor: string, biblioteca: string) {
      this.nombre = nombre;
      this.autor = autor;
      this.biblioteca = biblioteca;
    }

      Libro() {
        this.nombre = "";
        this.autor = "";
        this.biblioteca = "";
      }
  }