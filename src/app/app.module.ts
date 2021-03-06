import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
/* import { environment } from '../environments/environment';
import {AngularFireModule, FirebaseApp} from '@angular/fire';
// import { AngularFireDatabaseModule } from '@angular/fire/database';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireDatabase} from '@angular/fire/database';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireAuthModule} from '@angular/fire/auth';
import * as firebase from 'firebase';
import {AngularFirestore, AngularFirestoreModule} from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
// import { NgbModule } from '@angular/core';
import { NgChatModule } from 'ng-chat';
import { MDBBootstrapModule } from 'angular-bootstrap-md';*/
import { NouscontacterComponent } from './nouscontacter/nouscontacter.component';
import { AproposComponent } from './apropos/apropos.component';
// import {Http, HttpModule} from '@angular/http';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
  {path: 'nouscontacter' , component: NouscontacterComponent},
  {path: 'apropos' , component: AproposComponent},
 /* {path: 'listeannonces' , component: ListeannoncesComponent, children: [
      {path: 'afficherpetitannonce' , component: AfficherpetitannonceComponent},
    ]},*/
  {path: 'home', component: HomeComponent},
  {path: 'errorpage' , component: ErrorpageComponent},
  {path: '' , redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'errorpage'}
];

/*export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}*/

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NouscontacterComponent,
    AproposComponent,
    ErrorpageComponent,
    HomeComponent
  ],
    imports: [
        BrowserModule,
        RouterModule,
      BrowserModule,
     // AppRoutingModule,
      RouterModule.forRoot(appRoutes),
      ReactiveFormsModule,
      HttpClientModule,
    //  HttpModule,
    /*  TranslateModule.forRoot({
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }),*/
      FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
