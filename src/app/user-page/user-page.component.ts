


import { Observable } from 'rxjs';
import { Component, OnInit ,Input} from '@angular/core';

import { Bank } from './../shared/bank';

import { BankService } from './../shared/bank.service';




@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
  providers: [ BankService , ]
})
export class UserPageComponent implements OnInit  {

 totalbalance: number;
  public banks : any;
  
 
  @Input() depositamt : number  ;
  @Input() withdrawamt : number ;
   
  
  

  constructor( private banksrvc: BankService  ) {
    
    
   }

  deposit() {
    if(this.depositamt>0){
    this.totalbalance=this.totalbalance+this.depositamt;}
    else {
      alert('amount cannot be negative or zero')
    }
      

    
    
  }

  withdraw() {
    if(this.withdrawamt>this.totalbalance){
      alert('Withdraw amount cannot exceed balance');
    }  
    else{
      if(this.withdrawamt>0){
        this.totalbalance=this.totalbalance-this.withdrawamt;}
        else {
          alert('amount cannot be negative or zero')
        }
    
    }
    
  }

  alertmethod() {
    window.alert('loggedout')
  }
  ngOnInit(): void {
        this.banksrvc.getBank().subscribe((data) => {
        this.banks = data; });
     
          
    
  }


}
