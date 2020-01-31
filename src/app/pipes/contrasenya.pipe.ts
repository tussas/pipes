import { Pipe, PipeTransform } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Pipe({
  name: 'contrasenya'
})
export class ContrasenyaPipe implements PipeTransform {

  transform(value: string, activar:boolean= true ): any {
// recibe el valor, la variable activar q por defecto es verdadero...
    if(activar){

     let salida:string = "";
// x cada letra que tenga la salida,
     for (let index = 0; index < value.length; index++) {
       salida = salida + '*';
       // concatenas un *,
     }
     return salida;
     // devuelves el resultado..
    }else{
      return value;
      // o el nombre..
    }
  }

}

