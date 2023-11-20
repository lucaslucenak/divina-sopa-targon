import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient } from "@angular/common/http";
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { FooterComponent } from './components/footer/footer.component';
import { OrderTableComponent } from './components/order-table/order-table.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './layouts/layout/layout.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { AuthenticationInterceptor } from './interceptors/authentication.interceptor';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    AppComponent,
    DeliveryComponent,
    FooterComponent,
    OrderTableComponent,
    SidebarComponent,
    LoginComponent,
    LayoutComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    NgxMaskDirective, NgxMaskPipe
  ],
  providers: [
    provideNgxMask(),
    {provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true},
    JwtHelperService, {provide: JWT_OPTIONS, useValue: JWT_OPTIONS}
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
