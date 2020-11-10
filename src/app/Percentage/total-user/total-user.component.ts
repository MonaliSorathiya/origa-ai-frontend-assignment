import { Component, OnInit } from '@angular/core';
import { IUser } from '../../users';
import { UserDataService } from '../../user-data.service';

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
    this.userdataService.getUsers().subscribe(filteredData => {
      this.dictionary = filteredData
    });
  }

}
