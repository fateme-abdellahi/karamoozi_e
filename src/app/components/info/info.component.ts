import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Iinput } from 'src/app/interfaces/iinput';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  @Input('type') type:string='';
  @Output() inputChanged: EventEmitter<Iinput> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onChange(event:any){
    this.inputChanged.emit({value:event.target.value,type:this.type})
  }
}
