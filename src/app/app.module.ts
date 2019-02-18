import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskActiveComponent } from './task-active/task-active.component';
import { TaskActiveListComponent } from './task-active-list/task-active-list.component';
import { TaskNewComponent } from './task-new/task-new.component';
import { TaskEditComponent } from './task-edit/task-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskActiveComponent,
    TaskActiveListComponent,
    TaskNewComponent,
    TaskEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
