import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  [x: string]: any;
  selectedItems: any;
  technologyList: IDropdownSettings = {};
  skillsList: IDropdownSettings = {};
  locationList: IDropdownSettings = {};
  employeeList = [];
  filteredEmployees = [];

  constructor(private http: HttpClient) {}

  private apiURl = 'api/employeeList';

  ngOnInit(): void {
    this.getEmployees().subscribe((data) => {
      this.employeeList = data;
      this.filteredEmployees = this.employeeList;
    });
  }
  // READ details of table
  getEmployees(): Observable<[]> {
    return this.http.get<[]>(this.apiURl);
  }

  filterTable(filters: any) {
    console.log('in dashboard: ' + JSON.stringify(filters));
    this.filteredEmployees = [];
    if (
      filters.technologies.length === 0 &&
      filters.skills.length === 0 &&
      filters.locations.length === 0
    ) {
      this.filteredEmployees = this.employeeList;
    }
    this.employeeList.forEach((item) => {
      if (
        (filters.technologies &&
          this.checkValue(
            (item['technologies'] as string).split(','),
            filters.technologies
          )) ||
        (filters.skills &&
          this.checkValue(
            (item['skill'] as string).split(','),
            filters.skills
          )) ||
        (filters.locations &&
          this.checkValue(
            (item['baseLocation'] as string).split(','),
            filters.locations
          ))
      ) {
        this.filteredEmployees.push(item);
      }
    });
  }

  checkValue(terms: string[], formList: string[]): boolean {
    let isMatch = false;
    terms.forEach((item) => {
      formList.forEach((fromItem) => {
        if (item === fromItem) {
          isMatch = true;
        }
      });
    });
    return isMatch;
  }
  // filteredEmployees = this.employeeList.filter(function (applicant) => {});
}
function data(data: any) {
  throw new Error('Function not implemented.');
}
