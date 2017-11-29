import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Crossword';
  employees = [
  	{
  		name: 'The Wisdom Of Sundays', position: '10'
  	},
  	{
  		name: 'Irresistible', position: '4'
  	},
  	{
  		name: 'Algorithms To Live By', position: '25'
  	}
  ];
  model: any = {};
  model2: any = {};

  addEmployee(){
  	this.employees.push(this.model);
  	this.model = {};
  }

  deleteEmployee(i){
  	this.employees.splice(i,1);
  }

  myValue;
  editEmployee(k){
  	this.model2.name = this.employees[k].name;
  	this.model2.position = this.employees[k].position;
  	this.myValue = k;
  }

  updateEmployee(){
  	let k = this.myValue;
  	for(let i = 0; i < this.employees.length; i++){
  		if(i == k){
  			this.employees[i] = this.model2;
  			this.model2 = {};
  		}
  	}
  }
}
