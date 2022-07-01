import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  isChecked:boolean=false;
  books!: Book[];
  errorMessage!: string;  
  constructor(private bookService: BookService) { }
  getBooks(): void {
    this.bookService.getBooks().subscribe(
      (books: any) => this.books = books,
      (error: any) => this.errorMessage = error as any);
  }  
  
  ngOnInit(): void {
    this.getBooks();
  }
}
