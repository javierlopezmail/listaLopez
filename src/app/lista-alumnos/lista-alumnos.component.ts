import { Component } from '@angular/core';

interface Alumno {
  nombre: string;
  edad: number;
  curso: string;
}

@Component({
  selector: 'lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss']
})
export class ListaAlumnosComponent {
  alumnos: Alumno[] = [
    { nombre: 'Juan', edad: 20, curso: 'Angular' },
    { nombre: 'María', edad: 22, curso: 'React' },
    { nombre: 'Pedro', edad: 25, curso: 'NodeJS' },
    { nombre: 'Ana', edad: 21, curso: 'Angular' },
    { nombre: 'Carlos', edad: 23, curso: 'React' },
    { nombre: 'Sofía', edad: 24, curso: 'NodeJS' },
    { nombre: 'Luis', edad: 19, curso: 'Angular' },
    { nombre: 'Laura', edad: 20, curso: 'React' },
    { nombre: 'Andrés', edad: 22, curso: 'NodeJS' }
  ];
}