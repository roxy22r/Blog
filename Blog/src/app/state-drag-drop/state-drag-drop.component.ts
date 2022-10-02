import { Component, OnInit, Output } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-state-drag-drop',
  templateUrl: './state-drag-drop.component.html',
  styleUrls: ['./state-drag-drop.component.css']
})
export class StateDragDropComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  timePeriods = [
    'Bronze age',
    'Iron age',
    'Middle ages',
    'Early modern period',
    'Long nineteenth century',
  ];
   drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
  }

}
