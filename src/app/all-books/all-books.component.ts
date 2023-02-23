import { MyBooks } from './../../Models/MyBooks';
import { ApiService } from './../servies/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit{

  allBooks:MyBooks[]=[]
 
constructor(private api:ApiService){


}

ngOnInit(): void {
  this.api.getAllBooks()
  .subscribe((result:any)=>{
    console.log(result);
    this.allBooks = result
    
  })
}

}
