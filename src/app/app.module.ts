import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HeaderComponent } from './header/header.component';
import { InMemoryDataService } from './in-memory-data-service';
import { SidebarFilterComponent } from './sidebar-filter/sidebar-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    EmployeeListComponent,
    SidebarFilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
    NgMultiSelectDropDownModule.forRoot(),
    AppRoutingModule,
    NgxSliderModule,
  ],
  providers: [InMemoryDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
