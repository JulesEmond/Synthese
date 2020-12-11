import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormulairesComponent } from './theorie/formulaires/formulaires.component';
import { NavbarComponent } from './application/navbar/navbar.component';
import { HomeComponent } from './application/home/home.component';
import { CreateComponent } from './application/crud/create/create.component';
import { ReadComponent } from './application/crud/read/read.component';
import { UpdateComponent } from './application/crud/update/update.component';
import { DeleteComponent } from './application/crud/delete/delete.component';
import { FunComponent } from './application/fun/fun.component';
import { ContactComponent } from './application/contact/contact.component';
import { FooterComponent } from './application/footer/footer.component';
import { Error404Component } from './application/error404/error404.component';
import { TutorielsComponent } from './application/tutoriels/tutoriels.component';
import { FormulaireComponent } from './application/formulaire/formulaire.component';
import { ReactiveComponent } from './theorie/reactive/reactive.component';
import { ReadOneComponent } from './application/crud/read-one/read-one.component';

@NgModule({
  declarations: [
    AppComponent,
    FormulairesComponent,
    NavbarComponent,
    HomeComponent,
    CreateComponent,
    ReadComponent,
    UpdateComponent,
    DeleteComponent,
    FunComponent,
    ContactComponent,
    FooterComponent,
    Error404Component,
    TutorielsComponent,
    FormulaireComponent,
    ReactiveComponent,
    ReadOneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, //Template
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
