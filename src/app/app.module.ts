//meeting place for everything in the app: components, services, modules. Todo necesita importarse acá y añadirse al ngmodule

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { AboutComponent } from './components/about/about.component';

import { DataService } from './services/data.service';

const appRoutes: Routes = [ //Routes describe las rutas del app, para asignar diferentes urls a diferentes componentes.
  //{ path: '', redirectTo: 'home', pathMatch: 'full'}, //para implementar un redirect
  {path: 'user', component:UserComponent},
  {path: 'about', component:AboutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent
  ],
  imports: [ //modules siempre van acá (imports)
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes) //instalando el router en nuestra app, RouterModule nos permitira usar RouterOutlet & RouterLink
    //RouterOutlet es una directiva que le dice al router en qué parte de la vista renderizar el contenido.
  ],
  providers: [DataService], //acá van los services
  bootstrap: [AppComponent]
})
export class AppModule { }
