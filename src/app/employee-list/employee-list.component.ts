import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent {
  [x: string]: any;
  showModal: boolean = false;
  rowData: any = {};
  totalEmployee: any = null;

  @Input() employeeList: any[] = [];

  constructor() {}

  ngOnInit() {
    this.data = this.employeeList;
    this.totalEmployee = this.employeeList.length;
    this.contactForm = new FormGroup({
      name: new FormControl(),
      designation: new FormControl(),
      technology: new FormControl(),
      skills: new FormControl(),
      totalExperience: new FormControl(),
      availability: new FormControl(),
      baseLocation: new FormControl(),
      openRelocate: new FormControl(),
    });
  }

  onClick(data: any) {
    this.showModal = true;
    this.rowData = data;
  }

  hide() {
    this.showModal = false;
  }

  hide1() {
    this.showmodal = false;
  }

  additem(data: any): void {
    this.showmodal = true;
  }

  onSubmit() {
    this.employeeList.push(this.contactForm.value);
    this.hide1();
  }

  deleteRow(id: number) {
    var del = confirm(' Do you want to delete the employee from list?');
    if (del == true) {
      this.employeeList = this.employeeList.filter(
        (employee) => employee.id !== id
      );
    }
  }
}
