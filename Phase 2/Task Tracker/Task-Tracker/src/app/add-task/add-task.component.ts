import { Component, OnInit } from '@angular/core';
import { Tracker } from '../task.model';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  tracker : Array <Tracker>;

  constructor() {
    this.tracker = [];
   }

  ngOnInit(): void {
  }

  addTask( empname : string , empid : string , taskid : string , taskname : string , date : string){
    let tracker = new Tracker(empid,empname,taskid,taskname,date);
    this.tracker.push(tracker);
  }
  removetask (tracker : Tracker){
    let index = this.tracker.indexOf(tracker);
    this.tracker.splice(index,1);
  }

}
