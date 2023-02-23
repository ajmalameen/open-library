import { ViewBooksComponent } from './view-books/view-books.component';
import { EditBooksComponent } from './edit-books/edit-books.component';
import { AllBooksComponent } from './all-books/all-books.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBooksComponent } from './add-books/add-books.component';
import { DowloadComponent } from './dowload/dowload.component';

//pat set up for component
const routes: Routes = [
  //path AllBooksComponent
  {
    path:'' , component:AllBooksComponent
  },
  //path  AddBooksComponent
  {
    path:'add', component: AddBooksComponent
  },
  //path EditBooksComponent - localhost:4200/edit/id
  {
    path:'edit/:id', component:EditBooksComponent
  },
  //path View books -localhost:4200/view/id
  {
    path:'view/:id' , component:ViewBooksComponent
  },
  // path Download
  {
    path:'download' , component:DowloadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
