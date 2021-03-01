import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
 
  userText:string = 'Zafar';


  title = 'practice';
  employees: any[];

  constructor() {
    this.employees = [ 
      { id: 'emp101', name: 'meena', gender: 'Male', annualSalary: 23000, dateOfBirth: '1/31/2012' },
      { id: 'emp102', name: 'heena', gender: 'Male', annualSalary: 7000, dateOfBirth: '2/12/2012' },
      { id: 'emp103', name: 'mariyam', gender: 'Male', annualSalary: 80000, dateOfBirth: '3/12/2012' },
      { id: 'emp104', name: 'henna', gender: 'Female', annualSalary: 90000, dateOfBirth: '4/12/2012' },
      { id: 'emp105', name: 'june', gender: 'Female', annualSalary: 60000, dateOfBirth: '5/12/2012' }
    ];
  }

  getEmployees(): void {
    this.employees = [
       { id: 'emp101', name: 'meena', gender: 'Male', annualSalary: 23000, dateOfBirth: '1/31/2012' },
      { id: 'emp102', name: 'heena', gender: 'Male', annualSalary: 7000, dateOfBirth: '2/12/2012' },
      { id: 'emp103', name: 'mariyam', gender: 'Male', annualSalary: 80000, dateOfBirth: '3/12/2012' },
      { id: 'emp104', name: 'henna', gender: 'Female', annualSalary: 90000, dateOfBirth: '4/12/2012' },
      { id: 'emp105', name: 'june', gender: 'Female', annualSalary: 60000, dateOfBirth: '5/12/2012' }
      { id: 'emp106', name: 'Molly', gender: 'Female', annualSalary: 40000, dateOfBirth: '6/12/2012' }
    ];
  }

  trackByEmpId(index:number, employee:any):string {
    return employee.id;
  }

}
