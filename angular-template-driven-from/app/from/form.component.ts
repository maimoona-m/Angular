import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  log(x: any) { console.log(x);}

  submit(f: any) { console.log(f);}

  ngOnInit(): void {
  }

}
