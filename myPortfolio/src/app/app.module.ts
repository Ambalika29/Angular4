import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfessionalComponent } from './professional/professional.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { AboutmeComponent } from './home/aboutme/aboutme.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfessionalComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent,
    HeaderComponent,
    AboutmeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
