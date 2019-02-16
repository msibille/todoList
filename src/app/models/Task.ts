export class Task  {
taskName: String;
isActive: boolean;

  constructor(taskName: String) {
    this.taskName = taskName;
    this.isActive = true;
   }

   setActive() {
    this.isActive = true;
   }

   setNotActive() {
    this.isActive = false;
   }
}
