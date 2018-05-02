import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';

//firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { environment } from '../environments/environment';

//componenst
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { UsuarioListComponent } from './components/usuarios/usuario-list/usuario-list.component';
import { UsuarioComponent } from './components/usuarios/usuario/usuario.component';

//service
import {UsuarioService} from './services/usuario.service'

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    UsuarioListComponent,
    UsuarioComponent
    
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [
    UsuarioService
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
