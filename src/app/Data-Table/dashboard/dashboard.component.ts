import { Component, OnInit } from '@angular/core';
import { IUser } from '../../users';
import { UserDataService } from '../../user-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  dictionary: IUser[];

  constructor(
    private userdataService: UserDataService
  ) { }

  ngOnInit() {
    this.userdataService.getUsers().subscribe(filteredData => {
      this.dictionary = filteredData
      this.userdataService.dictionaryData = filteredData
    });
  }

  onSelectedOption(e) {
    this.getFilteredExpenseList();
  }

  getFilteredExpenseList() {
    if (this.userdataService.searchOption.length > 0)
      this.dictionary = this.userdataService.filteredListOptions();
    else {
      this.dictionary = this.userdataService.dictionaryData;
    }
    console.log(this.dictionary)
  }


}
