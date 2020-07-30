import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { EntityComponent } from './view/entity/entity.component';
import { EntityCreateComponent } from './view/entity/entity-create/entity-create.component';
import { EntityReadComponent } from './view/entity/entity-read/entity-read.component';
import { EntityDeleteComponent } from './view/entity/entity-delete/entity-delete.component';
import { AuthGuard } from './config/security/auth-guard';
import { LoginComponent } from './view/login/login.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'entity', component: EntityComponent, canActivate: [AuthGuard] },
  { path: 'entity/create', component: EntityCreateComponent, canActivate: [AuthGuard] },
  { path: 'entity/read/:id', component: EntityReadComponent, canActivate: [AuthGuard] },
  { path: 'entity/update', component: EntityCreateComponent, canActivate: [AuthGuard] },
  { path: 'entity/delete', component: EntityDeleteComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
