import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  customersLists:any = [];

  constructor(private userService: UserService,private router: Router) { }

  ngOnInit(): void {
    this.userService.getCustomers('')
    .subscribe(customers => {
      this.customersLists = customers;
    });
  }

  custDetail(id:any): void {
    this.userService.setData('custDet');
    this.router.navigate(['./customerdetail/', id]);
  }

}
