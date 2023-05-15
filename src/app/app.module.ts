import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { InfoComponent } from './components/info/info.component';
import { ProjectsComponent } from './components/projects/projects.component';
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment.prod";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MainComponent,
    InfoComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
