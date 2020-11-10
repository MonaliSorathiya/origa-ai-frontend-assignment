import { global } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { IUser } from '../../users';
import { UserDataService } from '../../user-data.service';

@Component({
  selector: 'app-representation-data',
  templateUrl: './representation-data.component.html',
  styleUrls: ['./representation-data.component.css']
})
export class RepresentationDataComponent implements OnInit {

  dictionary: IUser[];
  pie: any;
  constructor(
    private userdataService: UserDataService
  ) { }

  ngOnInit() {
    this.userdataService.getUsers().subscribe(options => {
      this.dictionary = options     
    });
    this.pie = new Chart('pie',{
      type: 'pie',
      options: {
        responsive: true,
        legend: {
					position: 'top',
				},animation: {
					animateScale: true,
					animateRotate: true
				}
      },
      data: {
				datasets: [{
					data: [3, 7, 5, 5].reverse(),
					backgroundColor: ["red","teal","orange","grey"],
					label: 'Dataset 1'
				}],
				labels: ['Latitude > 0','Latitude < 0','Longitude > 0','Longitude < 0']
			}
    })
  }


}
