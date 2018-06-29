import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customers-create',
  templateUrl: './customers-create.component.html',
  styleUrls: ['./customers-create.component.scss']
})
export class CustomersCreateComponent implements OnInit {

  anreden = [
    {value: 'Herr', viewValue: 'Herr'},
    {value: 'Frau', viewValue: 'Frau'},
    {value: 'Herr & Frau', viewValue: 'Herr & Frau'}
  ];

  contact = {}; // Save von Daten!

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  saveContact(): void {
    this.http.post('/api/contacts', this.contact)
      .subscribe(res => {
         this.router.navigate(['/customers']);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
