import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { EntityComponent } from './view/entity/entity.component';
import { EntityCreateComponent } from './view/entity/entity-create/entity-create.component';
import { EntityReadComponent } from './view/entity/entity-read/entity-read.component';
import { EntityDeleteComponent } from './view/entity/entity-delete/entity-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EntityComponent,
    EntityCreateComponent,
    EntityReadComponent,
    EntityDeleteComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
