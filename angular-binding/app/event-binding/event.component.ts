import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  template: `
          <h1>{{title}}</h1>
          <img src='https://angular.io/assets/images/logos/angular/{{imgname}}'/>
          <img [src]='imgpath' />
         
          <img src />
          <h4>[10+20]</h4>
          
              <h3>Employee Name :{{name}}</h3>
              <h3>Employee Address:{{address}}</h3> 
                
                <button disabled={{isDisable}}>Button</button>
                <br>
                <br>
                <button (click)="send()">Button</button>
                
                

                `,
  styleUrls: ['./event.component.css']
})
export class EventComponent{
  
  msg : string ="hello"
  title:string =" Employee Details ";
  name : string="Raj";
  address :string ="kerala";
  isDisable: boolean=false;
  imgpath:string='https://angular.io/assets/images/logos/angular/logo-nav@2x.png ';
  imgname:string='logo-nav@2x.png' ;
  send()
  {
    this.title="Event Binding is Done";
    
  }

}
