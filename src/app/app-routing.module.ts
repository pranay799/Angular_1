import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HeaderComponent } from './header/header.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'employeelist', component: EmployeeListComponent },
  { path: 'header', component: HeaderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponent = [
  DashboardComponent,
  HeaderComponent,
  EmployeeListComponent,
];
