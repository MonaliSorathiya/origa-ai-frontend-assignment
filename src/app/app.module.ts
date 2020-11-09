import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { DashboardComponent } from './Data-Table/dashboard/dashboard.component';
import { FilterDataComponent } from './Data-Table/filter-data/filter-data.component';
import { UserDataService } from './user-data.service';
import { RepresentationDataComponent } from './Pie-Chart/representation-data/representation-data.component'
import { ChartsModule } from 'ng2-charts';
import { TotalUserComponent } from './Percentage/total-user/total-user.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FilterDataComponent,
    RepresentationDataComponent,
    TotalUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatFormFieldModule,
    ChartsModule
    
    
    
  ],
  providers: [
    UserDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
