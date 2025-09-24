import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CultosComponent } from './cultos/cultos.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cultos', component: CultosComponent },
  { path: 'pedidos', component: PedidosComponent },
  { path: 'login', component: LoginComponent },
];
