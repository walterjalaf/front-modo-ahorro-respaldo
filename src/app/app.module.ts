import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
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
import {NgxPaginationModule} from 'ngx-pagination';
import { IndexEmpresaComponent } from './components/empresa/index-empresa/index-empresa.component';
import { CreateEmpresaComponent } from './components/empresa/create-empresa/create-empresa.component';
import { IndexInventarioComponent } from './components/inventario/index-inventario/index-inventario.component';
import { CreateInventarioComponent } from './components/inventario/create-inventario/create-inventario.component';
import { InventarioGeneralComponent } from './components/inventario/inventario-general/inventario-general.component';
import { PieChartComponent } from './components/inventario/inventario-general/pie-chart/pie-chart.component';
import { TablaComponent } from './components/inventario/inventario-general/tabla/tabla.component';
import { FormularioComponent } from './components/inventario/inventario-general/formulario/formulario.component';

import { LineChartComponent } from './components/dashboard/line-chart/line-chart.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { PerfilGestorComponent } from './components/gestor/perfil-gestor/perfil-gestor.component';
import { MatStepperModule } from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {CdkStep, CdkStepper, CdkStepperModule} from '@angular/cdk/stepper';
import { StepperComponent } from './components/empresa/create-empresa/stepper/stepper.component';
import {provideAnimations} from '@angular/platform-browser/animations';
import {VERSION as MAT_VERSION, MatNativeDateModule} from '@angular/material/core';
import {importProvidersFrom} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

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
    EditColaboradorComponent,
    IndexEmpresaComponent,
    CreateEmpresaComponent,
    IndexInventarioComponent,
    CreateInventarioComponent,
    InventarioGeneralComponent,
    PieChartComponent,
    TablaComponent,
    FormularioComponent,

    LineChartComponent,
    NotfoundComponent,
    PerfilGestorComponent,
    StepperComponent,






  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    FormsModule,
    NgxPaginationModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CdkStepperModule,
    MatSelectModule,
    MatRadioModule,
    MatSliderModule,
    MatButtonToggleModule


  ],
  exports: [CdkStepperModule],
  providers: [ provideHttpClient(),  provideAnimations(),  importProvidersFrom(MatNativeDateModule)],
  bootstrap: [AppComponent]
})

export class AppModule {  }
