import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ShalteriComponent } from './shalteri/shalteri.component';
import { StatusComponent } from './status/status.component';
import { UslugiComponent } from './uslugi/uslugi.component';

const routes: Routes = [
  { path: '', redirectTo: '/uslugi', pathMatch: 'full' },
  {
    path: 'uslugi',
    component: UslugiComponent,
  },
  {
    path: 'shalteri',
    component: ShalteriComponent,
  },
  {
    path: 'status',
    component: StatusComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
