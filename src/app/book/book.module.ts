import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { BookRoutingModule } from './book-routing.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [CommonModule, BookRoutingModule,MatSlideToggleModule,FormsModule],
  declarations: [BookComponent]
})
export class BookModule { }
