import { Component, OnInit, Input } from '@angular/core';
import { TaskActiveComponent } from '../task-active/task-active.component';
import { Task } from '../models/Task';

@Component({
  selector: 'app-task-active-list',
  templateUrl: './task-active-list.component.html',
  styleUrls: ['./task-active-list.component.css']
})
export class TaskActiveListComponent implements OnInit {

  @Input() tasklist: Task[];

  constructor() {
   }

  ngOnInit() {
    this.tasklist = [];
    this.tasklist.push(new Task('task1'));
    this.tasklist.push(new Task('task2'));
    this.tasklist.push(new Task('task3'));
    this.tasklist.push(new Task('task4'));
  }

  checkAlmostOneActive() {
    for (const task of this.tasklist) {
      if (task.isActive) {
        console.log('Task ' + task.taskName + ' is active');
       return true;
      }
    }
    return false;
  }
}
