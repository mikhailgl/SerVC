import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GoogleChartsModule } from 'angular-google-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskOneComponent } from './task-one/task-one.component';
import { TaskTwoComponent } from './task-two/task-two.component';
import { TaskThreeComponent } from './task-three/task-three.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { TaskFourComponent } from './task-four/task-four.component';
import {MatTableModule} from '@angular/material/table';
import { TaskFourTableComponent } from './task-four/task-four-table/task-four-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import { TaskFourV2Component } from './task-four-v2/task-four-v2.component';
import { PivotViewModule,  PivotViewAllModule, PivotFieldListAllModule } from '@syncfusion/ej2-angular-pivotview';
import { MatLabel, MatFormField } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';
import { MatOptgroup, MatOption } from '@angular/material/core';
import { SelectDropDownModule } from 'ngx-select-dropdown';



@NgModule({
  declarations: [
    AppComponent,
    TaskOneComponent,
    TaskTwoComponent,
    TaskThreeComponent,
    TaskFourComponent,
    TaskFourTableComponent,
    TaskFourV2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GoogleChartsModule,
    MatTabsModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatExpansionModule,
    MatRadioModule,
    PivotViewModule,
    PivotViewAllModule,
    PivotFieldListAllModule,
    SelectDropDownModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
