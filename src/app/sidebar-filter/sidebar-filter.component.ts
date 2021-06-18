import { Options } from '@angular-slider/ngx-slider/options';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-sidebar-filter',
  templateUrl: './sidebar-filter.component.html',
  styleUrls: ['./sidebar-filter.component.scss'],
})
export class SidebarFilterComponent implements OnInit {
  technologyList: any[] = [];
  skillsList: any[] = [];
  locationList: any[] = [];
  dataArray = [];
  @Output() selectedFilters: EventEmitter<any> = new EventEmitter();

  dropDownSettings: IDropdownSettings = {};

  selectedTechnologies = [];
  selectedSkills = [];
  selectedLocations = [];
  selectedExperience = [];
  item_text!: string;

  value: number = 0;
  highValue: number = 5;
  options: Options = {
    floor: 0,
    ceil: 15,
  };

  constructor() {}

  ngOnInit(): void {
    this.dropDownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: false,
    };
    this.initializeFilters();
  }

  initializeFilters() {
    this.technologyList = [
      { item_id: 1, item_text: 'UI' },
      { item_id: 2, item_text: 'UX' },
      { item_id: 3, item_text: 'VS' },
    ];

    this.skillsList = [
      { item_id: 1, item_text: 'Angular' },
      { item_id: 2, item_text: 'React' },
      { item_id: 3, item_text: 'Vue.js' },
      { item_id: 4, item_text: 'React Native' },
      { item_id: 5, item_text: 'XD' },
      { item_id: 6, item_text: 'Figma' },
      { item_id: 7, item_text: 'Sketch' },
    ];

    this.locationList = [
      { item_id: 1, item_text: 'Pune' },
      { item_id: 2, item_text: 'Indore' },
      { item_id: 3, item_text: 'Hyderabad' },
      { item_id: 4, item_text: 'Mumbai' },
    ];
  }

  returnSelectedFilters() {
    this.selectedFilters.emit({
      technologies:
        this.selectedTechnologies.length > 0
          ? this.getItemtext(this.selectedTechnologies)
          : [],
      skills:
        this.selectedSkills.length > 0
          ? this.getItemtext(this.selectedSkills)
          : [],
      locations:
        this.selectedLocations.length > 0
          ? this.getItemtext(this.selectedLocations)
          : [],
    });
  }

  getItemtext(data: any[]) {
    let temp: any = [];
    data.forEach(function (value) {
      temp.push(value.item_text);
    });
    return temp;
  }

  handleReset() {
    this.selectedTechnologies = [];
    this.selectedSkills = [];
    this.selectedLocations = [];
    this.selectedExperience = [];
  }
}
