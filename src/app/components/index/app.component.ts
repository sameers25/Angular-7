

import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})


export class AppComponent {
	title = 'Student Management By Sangwin Gawande';

	// Add few students for initial listing
	studentsList = [
	{	
		id : 1,
		first_name : "Sameer",
		last_name : "Shaikh",
		email : "sameers@winjit.com",
		phone : 7878787878,
		department : "Science"
	},
	{
		id : 2,
		first_name : "Farhan",
		last_name : "Shakh",
		email : "farhans@winjit.com",
		phone : 1111111111,
		department : "Commerce"
	},
	{
		id : 3,
		first_name : "Sneha",
		last_name : "Smith",
		email : "snehas@winjit.com",
		phone : 1212121212,
		department : "Science"
	},
	{
		id : 4,
		first_name : "John",
		last_name : "Doe",
		email : "john@winjit.com",
		phone : 1233211234,
		department : "Arts"
	},
	{
		id : 5,
		first_name : "Peter",
		last_name : "Parker",
		email : "peter@winjit.com",
		phone : 3434343434,
		department : "Engineering"
	}
	];

	constructor() {
		// Save students to localStorage
		localStorage.setItem('students', JSON.stringify(this.studentsList));
	}
}

