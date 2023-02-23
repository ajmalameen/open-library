import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  //get -all -books function
  getAllBooks(){
   return this.http.get('https://my-json-server.typicode.com/ajmalameen/library-server/books')
  }
  //get - view books api
  viewBook(bookId:any){
    return this.http.get('https://my-json-server.typicode.com/ajmalameen/library-server/books/'+bookId)

  }
  //post- add books
  addBook(book:any){
    return this.http.post('https://my-json-server.typicode.com/ajmalameen/library-server/books',book)
  }

}
