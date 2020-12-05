import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

 

  constructor(private http: HttpClient) { }

  onSubmit(data) {

      this.http.post('http://localhost:3000/BankDetails', data).subscribe((result) => {
        console.warn("result",result);
      });
      alert('registration successful');
   
  }

  ngOnInit(): void {
  }

}
