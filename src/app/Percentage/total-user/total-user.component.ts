import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/user-data.service';
import { IUser } from 'src/app/users';

@Component({
  selector: 'app-total-user',
  templateUrl: './total-user.component.html',
  styleUrls: ['./total-user.component.css']
})
export class TotalUserComponent implements OnInit {
  dictionary: IUser[];
  
  constructor(
    private userdataService: UserDataService
  ) { }

  ngOnInit() {
    this.userdataService.getPosts().subscribe(filteredData => {
      this.dictionary = filteredData
    });
  }

}
