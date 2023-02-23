import { ApiService } from './../servies/api.service';
import { MyBooks } from './../../Models/MyBooks';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent  {

  book:MyBooks={}
  constructor(private api:ApiService,private router:Router){}

  
  addBook(){
    this.api.addBook(this.book)
    .subscribe(
      (result:any)=>{
        console.log(result);
        // redirect to allbooks page
        this.router.navigateByUrl('')
        
      }
    )
    
  }

}
