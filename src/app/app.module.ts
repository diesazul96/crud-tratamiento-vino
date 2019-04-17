import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from '../enviroment/environment';


@NgModule({
  imports:      [ BrowserModule, AngularFireModule.initializeApp(environment.firebase),FormsModule ],
  declarations: [ AppComponent, HelloComponent ],
  providers: [AngularFirestore],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
