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

  name:string="Raj kumar "
  address:string="Managalore"
  salary:number=25000
  
   
  getRequest()
   {
     this.status="You have Submitted"
     
   }   














  // @ViewChild(ChildaComponent) 
  // Childa : ChildaComponent ;
 
// @ViewChildren(ChildaComponent)
// childa : QueryList<ChildaComponent>;

// childaArray:Array<ChildaComponent>




// sendmsg()
// {
// this.Childa.msg="Child-A is receiving message from parent";
// this.Childa.msgtitle="Child-A is receiving Title from parent";
// }
 

//   sendmsg(){

// this.childaArray[2].msg="Child-A message from parent";
// this.childaArray[2].msgtitle="Child-A Title from parent";
// this.childaArray[1].msg="Child-A message from parent";
// this.childaArray[1].msgtitle="Child-A Title from parent";

// }

// ngAfterViewInit():void
//  {
//    this.childaArray=this.childa.toArray();
   
//   }
 


}


