import { Component, ViewChild, ElementRef, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { ChildaComponent } from './childa/childa.component';
import { ChildbComponent } from './childb/childb.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {

  title: string ="Employee Details";
  status:string="";

 
}


