import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { ActivatedRoute, Router } from '@angular/router'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {

  customersLists: any = [];
  routeSub: Subscription | undefined;
  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      if(params['id']) {
        this.userService.getCustomers(params['id'])
        .subscribe(customers => {
          this.customersLists = [];
          this.customersLists.push(customers);
        }); 
      } else {
        this.userService.getCustomers('')
        .subscribe(customers => {
          this.customersLists = customers;
        });
      }
    });
  }

  move(custId:number) {
    debugger;
    this.router.navigate(['./customerdetail/', custId]);
  }

}
