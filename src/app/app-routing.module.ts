import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { EntityComponent } from './view/entity/entity.component';
import { EntityFreeComponent } from './view/entity-free/entity-free.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'entity', component: EntityComponent },
  { path: 'entityfree', component: EntityFreeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
