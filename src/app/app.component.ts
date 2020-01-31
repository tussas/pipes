import { Component } from '@angular/core';
import { reject } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

nombre = 'Florencia';

nombre2 = 'maria florencia gascon prestia';


arreglo = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

PI = Math.PI;

a = 0.234;

salario = 3125.9;

heroe = { nombre: 'Logan',
clave: 'Wolverine',
direccion:{
  calle: 'Primera',
  casa: '19'
}

};
valorDePromesa = new Promise(( resolve, reject )=>{

  setTimeout( () =>resolve('LLego la data!!'), 3500 );

 } );

fecha = new Date();



video = 'z3tzEreQ2lo';

activar:boolean = true;


}


