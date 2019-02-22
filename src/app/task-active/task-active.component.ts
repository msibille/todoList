import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/Task';

@Component({
  selector: 'app-task-active',
  templateUrl: './task-active.component.html',
  styleUrls: ['./task-active.component.css']
})
export class TaskActiveComponent implements OnInit {

  @Input() task: Task;
  @Output() edit: EventEmitter<any> = new EventEmitter();

  constructor() {
   }

  ngOnInit() {
  }

  onComplete() {
    this.task.setNotActive();
  }

  onEdit() {
    this.edit.emit(this.task);
  }
}
