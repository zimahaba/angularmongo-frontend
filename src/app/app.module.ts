// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { EntityComponent } from './view/entity/entity.component';
import { EntityCreateComponent } from './view/entity/entity-create/entity-create.component';
import { EntityReadComponent } from './view/entity/entity-read/entity-read.component';
import { EntityDeleteComponent } from './view/entity/entity-delete/entity-delete.component';
import { AuthInterceptor } from './config/security/auth-interceptor';
import { JwtInterceptor } from './config/security/jwt-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EntityComponent,
    EntityCreateComponent,
    EntityReadComponent,
    EntityDeleteComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
