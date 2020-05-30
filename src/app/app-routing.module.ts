import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TaskOneComponent} from './task-one/task-one.component';
import {TaskTwoComponent} from './task-two/task-two.component';


const routes: Routes = [
  {path: 'task-one', component: TaskOneComponent},
  {path: 'task-two', component: TaskTwoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
