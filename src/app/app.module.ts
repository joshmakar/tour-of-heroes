import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from './in-memory-data.service';
import { MessagesComponent } from './messages/messages.component';
<<<<<<< HEAD
import { NgModule } from '@angular/core';

=======
>>>>>>> parent of ccd642e... Complete Routing Section

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    FormsModule,
    AppRoutingModule,
    HttpClientModule
=======
    FormsModule
>>>>>>> parent of ccd642e... Complete Routing Section
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
