import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { fuseAnimations } from '@fuse/animations';



@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : fuseAnimations
})
export class CustomersComponent implements OnInit, OnDestroy {
  

  searchInput: FormControl;

  // Private
  private _unsubscribeAll: Subject<any>;

  displayedColumns = ['anrede', 'name', 'city', 'phone', 'email', 'contactdetails', 'contractdetails'];
  contact: any;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
  
  ) {
      // Set the defaults
      this.searchInput = new FormControl('');

      // Set the private defaults
      this._unsubscribeAll = new Subject();

   }

  ngOnInit(): void  
  {
    this.http.get('/api/contacts').subscribe(data => {
      this.contact = data;
      console.log(this.contact);
    });
  }
  /**
   * On destroy
   */
  ngOnDestroy(): void
  {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
