import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from "@angular/forms";
import { provideHttpClient } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { routing } from "./app.routing";
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { TopComponent } from './components/top/top.component';
import { IndexColaboradorComponent } from './components/colaborador/index-colaborador/index-colaborador.component';
import { CreateColaboradorComponent } from './components/colaborador/create-colaborador/create-colaborador.component';
import { EditColaboradorComponent } from './components/colaborador/edit-colaborador/edit-colaborador.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    FooterComponent,
    LoginComponent,
    TopComponent,
    IndexColaboradorComponent,
    CreateColaboradorComponent,
    EditColaboradorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    FormsModule,
  ],
  providers: [ provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
