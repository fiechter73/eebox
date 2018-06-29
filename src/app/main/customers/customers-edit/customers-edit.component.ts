import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-customers-edit',
  templateUrl: './customers-edit.component.html',
  styleUrls: ['./customers-edit.component.scss']
})
export class CustomersEditComponent implements OnInit {

  anreden = [
    {value: 'Herr', viewValue: 'Herr'},
    {value: 'Frau', viewValue: 'Frau'},
    {value: 'Herr & Frau', viewValue: 'Herr & Frau'}
  ];


  contact = {};
  idContact: string;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idContact = this.route.snapshot.queryParams['idContact'];
    this.getContact(this.idContact);
  }

  getContact(idContact): void {
    this.http.get('/api/contacts/' + idContact).subscribe(data => {
      this.contact = data;
    });
  }

  updateContact(id, data): void {
    this.http.put('/api/contacts/' + id, data)
      .subscribe(res => {
          // tslint:disable-next-line:no-shadowed-variable
          const id = res['id'];
          this.router.navigate(['/customers-detail'], {queryParams: {idContact: id}});
        }, (err) => {
          console.log(err);
        }
      );
  }
}
