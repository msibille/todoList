import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../models/Task';

@Component({
  selector: 'app-task-active',
  templateUrl: './task-active.component.html',
  styleUrls: ['./task-active.component.css']
})
export class TaskActiveComponent implements OnInit {

  @Input() task: Task;

  constructor() {
   }

  ngOnInit() {
  }

  onComplete() {
    this.task.setNotActive();
  }
}
