import { Component } from '@angular/core';
import { NgClass, NgForOf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgClass, NgForOf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  categorias = [
    { nombre: 'Baches y Vialidades', icono: 'bi-cone-striped' },
    { nombre: 'Alumbrado Público', icono: 'bi-lightbulb-fill' },
    { nombre: 'Seguridad', icono: 'bi-shield-lock-fill' },
    { nombre: 'Servicios Públicos', icono: 'bi-tools' },
    { nombre: 'Medio Ambiente', icono: 'bi-tree-fill' },
    { nombre: 'Recolección de Basura', icono: 'bi-trash3-fill' },
    { nombre: 'Agua y Alcantarillado', icono: 'bi-droplet-half' },
  ];

  reportes = [
    { nombreR: 'Baches y Vialidades', icono: 'bi-cone-striped', img:'paseo-rosas1.jpeg' },
    { nombreR: 'Alumbrado Público', icono: 'bi-lightbulb-fill',img:'paseo-rosas1.jpeg' },
    { nombreR: 'Seguridad', icono: 'bi-shield-lock-fill',img:'paseo-rosas1.jpeg' },
    { nombreR: 'Servicios Públicos', icono: 'bi-tools',img:'paseo-rosas1.jpeg' },
  ];
}
