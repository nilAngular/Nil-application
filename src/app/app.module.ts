import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports: [BrowserModule,
     HttpClientModule,
     FormsModule,
      ReactiveFormsModule, 
      AppRoutingModule, 
      BrowserAnimationsModule],

     
  declarations: [AppComponent, DashboardComponent, BookDetailComponent, LoginComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 
