import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway',
  template: `
            Please enter the value <input [(ngModel)]='name'>
            <br>
            you Entered: {{name}}
            
            `,
  styleUrls: ['./twoway.component.css']
})
export class TwowayComponent  {
  
  name: string ="Hello"
  // <input [value]='name' (input)='name=$event.target.value'>
  // <input [(ngModel)]='name' >

}
