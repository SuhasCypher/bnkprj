import { Router } from '@angular/router';
import { Bank } from './../shared/bank';
import { Component, OnInit } from '@angular/core';
import { BankService } from '../shared/bank.service';

import { map } from 'rxjs-compat/operator/map';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {
  acc_holder: string;
  public banks : Bank [] = [];
  public savbal : any;
  constructor(private banksrvc: BankService, private router:Router) { }

  alertmethod() {
    window.alert('loggedout')
  }

  ngOnInit(): void {

    this.banksrvc.getBank().subscribe((data) => {
      this.banks = data; });

   

    }
    onchange(){

        this.router.navigate(['register']);
    }
    
    Search() {

      if(this.acc_holder == ""){

        this.ngOnInit();
      }else{

      this.banks = this.banks.filter(res => {return res.acc_holder.toLocaleLowerCase().match(this.acc_holder.toLocaleLowerCase());});
      }
    }

    delete(){

      alert('still in development');
    }
 


}
