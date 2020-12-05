import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-custom-nav',
  templateUrl: './custom-nav.component.html',
  styleUrls: ['./custom-nav.component.css']
})
export class CustomNavComponent implements OnInit {

 home: string = 'Home';
 login: string = 'Login';
 register: string= 'Register';
 user: string= 'User';
 adminpage: string ='AdminPage'

 admin: string= 'Admin';
  constructor() { }

  ngOnInit(): void {
  }

}
