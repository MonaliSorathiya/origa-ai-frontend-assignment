import { Injectable } from '@angular/core';
import { IUser } from './users';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  searchOption = [];

  public dictionaryData: IUser[]

  postUrl: string = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) { }

  getPosts(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.postUrl);
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
