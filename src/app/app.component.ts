import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'customerInfo';
  page = 'cust';

  constructor(private userService: UserService) {
    this.userService.getData().subscribe((data) => {
      if(data !== ''){
        this.page = data;
      }
    });
  }

  toggle(page:string) {
    this.page = page;
  }



}
