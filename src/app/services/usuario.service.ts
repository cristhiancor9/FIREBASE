import { Injectable } from '@angular/core';

import {AngularFireDatabase,AngularFireList} from 'angularfire2/database'
import { Usuario } from '../models/usuario';

@Injectable()
export class UsuarioService {

  usuarioList: AngularFireList<any>;
  selectedUsuario: Usuario = new Usuario();

  constructor(private firebase: AngularFireDatabase) { }


  getUsuario(){

    this.usuarioList= this.firebase.list('usuarios');

  }

  insertUsario( usuario: Usuario){
 
     this.usuarioList.push({
          nombres:usuario.nombres,
          apellidos:usuario.apellidos,
          fechanacimiento: usuario.fecha_nacimiento

     })

  }

  updateUsuario(usuario: Usuario){

    this.usuarioList.update(usuario.$key,{
      nombres:usuario.nombres,
      apellidos:usuario.apellidos,
      fechanacimiento: usuario.fecha_nacimiento

    });

  }

deleteUsuario(usuario: Usuario){

this.usuarioList.remove(usuario.$key);

}


}
