import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-contracts-detail',
  templateUrl: './contracts-detail.component.html',
  styleUrls: ['./contracts-detail.component.scss']
})
export class ContractsDetailComponent implements OnInit {

  idContact:  string;
  idContract: string;
  contract = {};

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void  {
    this.idContract = this.route.snapshot.queryParams['idContract'];
    this.idContact = this.route.snapshot.queryParams['idContact'];
    this.getContractDetail(this.idContact, this.idContract);
  }

  getContractDetailOld(idContact, idContract ): void {
    this.http.get('/api/contractofcontacts/' + idContact + '/' + idContract ).subscribe(data => {
      this.contract = data;
      console.log(data.toString);
    });
  }

  getContractDetail(idContact, idContract): void {
    this.http.get('/api/contractofcontacts/' + idContact + '/' + idContract ).pipe(
      map(res => {
        this.contract['boxNr'] = res['boxNr'];
        this.contract['type'] = res['type'];
        this.contract['buildingInfo'] = res['buildingInfo'];
        this.contract['contractStartDate'] = new Date(res['contractStartDate']);
        this.contract['contractEndDate']  = new Date (res['contractEndDate']);
        const end = res['contractEndDate']; // - res['contractStartDate'];
        const start = res['contractStartDate'];
        const dateEnd = new Date(end);
        const dateStart = new Date(start);
        this.contract['runningTime']  = this.monthCalulator(dateStart, dateEnd);
        console.log( this.monthCalulator(dateStart, dateEnd));
        return this.contract;
      })
    )
    .subscribe(contract => {
      console.log(contract);
    });
  }

  monthCalulator(dateStart: Date , dateEnd: Date): number {
    const years = dateEnd.getFullYear() - dateStart.getFullYear();
    const months = dateEnd.getMonth() - dateStart.getMonth();
    let totalMoths = (years * 12) + months;
    const dateEndDay = dateEnd.getDate();
    const dateStartDay = dateStart.getDate();
    let days = dateEndDay - dateStartDay;
    let dateEndDayLastDate = null;
    let dateStartDayLastDate = null;
    if (days < 0) {
       dateEndDayLastDate  = new Date(dateEnd.getFullYear(), dateEnd.getMonth() + 1 , 0).getDate();
       dateStartDayLastDate  = new Date(dateStart.getFullYear(), dateStart.getMonth() + 1 , 0).getDate();
      if (dateEndDay !== dateEndDayLastDate || dateStartDay !== dateStartDayLastDate ) {
        totalMoths -= 1;
        days = (new Date(dateEnd.getFullYear(), dateEnd.getMonth() + 1, 0).getDate()) + days;
      } else {
        days = 0;
      }
    }
    return totalMoths;
  }

  deleteContract(idContact, idContract, contract ): void {
    this.http.put('/api/contractofcontactsdel/' + idContact + '/' + idContract, contract )
      .subscribe(res => {
        this.router.navigate(['/contract'], {queryParams: {idContract: this.idContract, idContact: this.idContact}});
      }, (err) => {
      console.log(err);
      }
    );
  }
}
