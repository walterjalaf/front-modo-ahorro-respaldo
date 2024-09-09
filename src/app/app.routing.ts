import { Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders } from "@angular/core";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { IndexColaboradorComponent } from './components/colaborador/index-colaborador/index-colaborador.component';
import { CreateColaboradorComponent } from './components/colaborador/create-colaborador/create-colaborador.component';
import { EditColaboradorComponent } from './components/colaborador/edit-colaborador/edit-colaborador.component';
import { IndexEmpresaComponent } from './components/empresa/index-empresa/index-empresa.component';
import { CreateEmpresaComponent } from './components/empresa/create-empresa/create-empresa.component';
import { IndexInventarioComponent } from './components/inventario/index-inventario/index-inventario.component';
import { CreateInventarioComponent } from './components/inventario/create-inventario/create-inventario.component';
import { InventarioGeneralComponent } from './components/inventario/inventario-general/inventario-general.component';
import { PerfilGestorComponent } from './components/gestor/perfil-gestor/perfil-gestor.component';


const appRoutes: Routes = [
 {path: 'dashboard', component: DashboardComponent},
 {path: '', component: LoginComponent},

 {path: 'colaborador', component: IndexColaboradorComponent},
 {path: 'colaborador/create', component: CreateColaboradorComponent},
 {path: 'colaborador/:id', component: EditColaboradorComponent},
 {path: 'empresa' , component: IndexEmpresaComponent},
 {path: 'empresa/create' , component: CreateEmpresaComponent},
 {path: 'inventario', component: IndexInventarioComponent},
 {path: 'inventario/create', component: CreateInventarioComponent},
 {path: 'General', component: InventarioGeneralComponent},
 {path: 'Perfil', component:PerfilGestorComponent }



];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
