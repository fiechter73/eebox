import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customers-detail',
  templateUrl: './customers-detail.component.html',
  styleUrls: ['./customers-detail.component.scss']
})
export class CustomersDetailComponent implements OnInit {

  contact = {};
  idContact: string;

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.idContact = this.route.snapshot.queryParams['idContact'];
    this.getContactDetail(this.idContact);
  }

  getContactDetail(id): void {
    this.http.get('/api/contacts/' + id).subscribe(data => {
      this.contact = data;
    });
  }

  deleteContact(id): void {
    this.http.delete('/api/contacts/' + id)
      .subscribe(res => {
          this.router.navigate(['/customers']);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
