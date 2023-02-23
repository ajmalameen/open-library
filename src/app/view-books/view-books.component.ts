import { MyBooks } from './../../Models/MyBooks';
import { ApiService } from './../servies/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})
export class ViewBooksComponent implements OnInit {
  
  bookId:any
  book:MyBooks = {}

  constructor(private activatedRoute:ActivatedRoute,private api:ApiService){

  }
  ngOnInit():void {
    // to get path parameter from Url
    this.activatedRoute.params
    .subscribe((data:any)=>{
      console.log(data['id']);
      this.bookId = data['id']
      
    })
    //call api
    this.api.viewBook(this.bookId)
    .subscribe((result:any)=>{
      console.log(result);
      this.book = result

      
      
      
    })
  }

}
