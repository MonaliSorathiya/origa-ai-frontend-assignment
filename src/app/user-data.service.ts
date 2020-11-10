import { Injectable } from '@angular/core';
import { IUser } from './users';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  searchOption = [];

  dictionaryData: IUser[]

  getUrl: string = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.getUrl);
  }  

  filteredListOptions() {
    let filteredData = this.dictionaryData;
    let filteredPostsList = [];
    for (let dictionary of filteredData) {
      for (let options of this.searchOption) {
        if (options.name === dictionary.name) {
          filteredPostsList.push(dictionary);
        }
      }
    }
    // console.log(filteredPostsList);
    return filteredPostsList;
  }
}
