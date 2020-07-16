import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { EntityComponent } from './view/entity/entity.component';
import { EntityFreeComponent } from './view/entity-free/entity-free.component';
import { EntityFreeCreateComponent } from './view/entity-free/entity-free-create/entity-free-create.component';
import { EntityFreeReadComponent } from './view/entity-free/entity-free-read/entity-free-read.component';
import { EntityFreeDeleteComponent } from './view/entity-free/entity-free-delete/entity-free-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EntityComponent,
    EntityFreeComponent,
    EntityFreeCreateComponent,
    EntityFreeReadComponent,
    EntityFreeDeleteComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
