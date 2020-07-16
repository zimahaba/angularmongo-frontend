import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { EntityComponent } from './view/entity/entity.component';
import { EntityFreeComponent } from './view/entity-free/entity-free.component';
import { EntityFreeCreateComponent } from './view/entity-free/entity-free-create/entity-free-create.component';
import { EntityFreeReadComponent } from './view/entity-free/entity-free-read/entity-free-read.component';
import { EntityFreeDeleteComponent } from './view/entity-free/entity-free-delete/entity-free-delete.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'entity', component: EntityComponent },
  { path: 'entityfree', component: EntityFreeComponent },
  { path: 'entityfree/create', component: EntityFreeCreateComponent },
  { path: 'entityfree/read', component: EntityFreeReadComponent },
  { path: 'entityfree/update', component: EntityFreeCreateComponent },
  { path: 'entityfree/delete', component: EntityFreeDeleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
