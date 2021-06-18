import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {}
  public dropdownList: any[] = [];
  public selectedItems: any[] = [];
  dropdownSettings!: IDropdownSettings;
  employeeList = [];

  title = 'yash-assignment';
}
