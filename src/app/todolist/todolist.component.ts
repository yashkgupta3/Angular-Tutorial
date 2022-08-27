import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor() { 
// Called first time before the ngOnInit()
  }

  ngOnInit(): void {
    // Called after the constructor and called  after the first ngOnChanges()
  }

  counterId:number=0;
  taskListOfTODOList:Array<any> =[];
  ischecked:boolean=false;
  isIndeterminate:boolean=false;
  addTask(taskString:string){
    this.taskListOfTODOList.push({counterId:this.counterId,task:taskString,status:'incomplete'});
    this.counterId++;
    console.log(this.taskListOfTODOList)

  }
  onChkChange(counter:number) {
    let task = this.taskListOfTODOList[counter];
    task.status=task.status==='complete'?'incomplete':'complete'
    this.taskListOfTODOList[counter]=task;
  } 




}
