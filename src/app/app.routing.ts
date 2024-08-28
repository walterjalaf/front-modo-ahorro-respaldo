import { Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders } from "@angular/core";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { IndexColaboradorComponent } from './components/colaborador/index-colaborador/index-colaborador.component';
import { CreateColaboradorComponent } from './components/colaborador/create-colaborador/create-colaborador.component';
import { EditColaboradorComponent } from './components/colaborador/edit-colaborador/edit-colaborador.component';


const appRoutes: Routes = [
 {path: 'dashboard', component: DashboardComponent},
 {path: '', component: LoginComponent},

 {path: 'colaborador', component: IndexColaboradorComponent},
 {path: 'colaborador/create', component: CreateColaboradorComponent},
 {path: 'colaborador/:id', component: EditColaboradorComponent},


];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
