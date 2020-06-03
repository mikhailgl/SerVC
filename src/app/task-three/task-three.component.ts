import { Component, OnInit } from '@angular/core';
import { xirr, CashFlow } from '@webcarrot/xirr';
import { flows} from '../DataFile';

@Component({
  selector: 'app-task-three',
  templateUrl: './task-three.component.html',
  styleUrls: ['./task-three.component.css']
})

export class TaskThreeComponent implements OnInit {

  constructor() { }

  xirr: number;

  ngOnInit(): void {
    try {
      this.xirr = xirr(flows);
    } catch (err) {
      console.log(err);
    }
  }

}
