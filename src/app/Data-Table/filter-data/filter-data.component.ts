import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { IUser } from '../../users';
import { UserDataService } from '../../user-data.service';
@Component({
  selector: 'app-filter-data',
  templateUrl: './filter-data.component.html',
  styleUrls: ['./filter-data.component.css']
})
export class FilterDataComponent implements OnInit {

  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  allUsers: IUser[];
  autoCompleteList: any[]

  @ViewChild('autocompleteInput', { static: false }) autocompleteInput: ElementRef;
  @Output() onSelectedOption = new EventEmitter();

  constructor(
    public userdataService: UserDataService) { }

  ngOnInit() {
    this.userdataService.getUsers().subscribe(filteredData => {
      this.allUsers = filteredData
    });

    this.myControl.valueChanges.subscribe(userInput => {
      this.autoCompleteExpenseList(userInput);
    })
  }

  private autoCompleteExpenseList(input) {
    let categoryList = this.filterCategoryList(input)
    this.autoCompleteList = categoryList;
  }

  filterCategoryList(val) {
    var categoryList = []
    if (typeof val != "string") {
      return [];
    }
    if (val === '' || val === null) {
      return [];
    }
    return val ? this.allUsers.filter(s => s.name.toLowerCase().indexOf(val.toLowerCase()) != -1)
      : this.allUsers;
  }

  displayFn(dictionary: IUser) {
    let k = dictionary ? dictionary.name : dictionary;
    return k;
  }

  filterPostList(event) {
    var filteredData = event.source.value;
    if (!filteredData) {
      this.userdataService.searchOption = []
    }
    else {
      this.userdataService.searchOption.push(filteredData);
      this.onSelectedOption.emit(this.userdataService.searchOption)
    }
    this.focusOnPlaceInput();
  }

  removeOption(option) {
    let index = this.userdataService.searchOption.indexOf(option);
    if (index >= 0)
      this.userdataService.searchOption.splice(index, 1);
    this.focusOnPlaceInput();
    this.onSelectedOption.emit(this.userdataService.searchOption)
  }

  focusOnPlaceInput() {
    this.autocompleteInput.nativeElement.focus();
    this.autocompleteInput.nativeElement.value = '';
  }
}
