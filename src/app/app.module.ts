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
import { LoginComponent } from './view/login/login.component';
import { SpinnerComponent } from './infra/spinner/spinner.component';
import { SpinnerOverlayComponent } from './infra/spinner/spinner-overlay/spinner-overlay.component';
import { SpinnerOverlayService } from './infra/spinner/spinner-overlay.service';
import { OverlayModule, OVERLAY_PROVIDERS } from '@angular/cdk/overlay';
import { SpinnerInterceptor } from './config/spinner-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EntityComponent,
    EntityCreateComponent,
    EntityReadComponent,
    EntityDeleteComponent,
    LoginComponent,
    SpinnerComponent,
    SpinnerOverlayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true },
    OVERLAY_PROVIDERS,
  ],
  bootstrap: [AppComponent],
  entryComponents: [SpinnerComponent],
})
export class AppModule {}
