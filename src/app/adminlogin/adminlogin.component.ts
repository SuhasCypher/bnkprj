import { Bank } from './../shared/bank';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { BankService } from '../shared/bank.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  adminid:string;
  
  password:string;
  banks : Bank [] = [];
  constructor(private banksrvc: BankService,private router:Router) { }

  ngOnInit(): void {
  }
  
  login(){

    if(this.adminid=="admin" && this.password=="secret"){
      this.router.navigate(['adminpage']);
    }
    else{
      alert("your not the admin")
    }
  }
 
}
