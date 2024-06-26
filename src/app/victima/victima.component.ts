import { Component } from '@angular/core';

interface Child {
  nombres_ape: string;
  cedula: string;
  fecha_nacimiento: string;
  estado: string;
}

interface Victim {
  nombre_victima: string;
  hijos: Child[];
}

@Component({
  selector: 'app-victima',
  templateUrl: './victima.component.html',
  styleUrls: ['./victima.component.css']
})

export class VictimaComponent {
  victim: Victim = {
    nombre_victima: '',
    hijos: []
  };

  currentIndex = 0;

  addChild() {
    this.victim.hijos.push({
      nombres_ape: '',
      cedula: '',
      fecha_nacimiento: '',
      estado:'true'
    });
  }

  removeChild(index: number) {
    this.victim.hijos.splice(index, 1);
  }

  prevChild() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  nextChild() {
    if (this.currentIndex < this.victim.hijos.length - 1) {
      this.currentIndex++;
    }
  }

  calculateAge(fecha_nacimiento: string): number {
    const birthDate = new Date(fecha_nacimiento);
    const difference = Date.now() - birthDate.getTime();
    const ageDate = new Date(difference);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  onSubmit() {
    const nombres_ape = this.victim.hijos.map(child => child.nombres_ape);
    const cedulas = this.victim.hijos.map(child => child.cedula);
    const fechas_nacimiento = this.victim.hijos.map(child => child.fecha_nacimiento);
    const edades = this.victim.hijos.map(child => this.calculateAge(child.fecha_nacimiento));
    const estados = this.victim.hijos.map(child => child.estado);


    const nom_json = JSON.stringify({ nombres_ape });
    const ced_json = JSON.stringify({ cedulas });
    const fec_json = JSON.stringify({ fechas_nacimiento });
    const eda_json = JSON.stringify({ edades });
    const est_json = JSON.stringify({ estados });

    localStorage.setItem('nombres_ape', nom_json);
    localStorage.setItem('cedulas', ced_json);
    localStorage.setItem('fechas_nacimiento', fec_json);
    localStorage.setItem('edades', eda_json);
    localStorage.setItem('estados', est_json);

    this.victim.nombre_victima = '';
    this.victim.hijos = [];
    this.currentIndex = 0; 
  }
}
