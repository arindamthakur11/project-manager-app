import { Component, EventEmitter, Input, OnInit , Output} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-project-cost-repeatable',
  templateUrl: './project-cost-repeatable.component.html',
  styleUrls: ['./project-cost-repeatable.component.scss']
})
export class ProjectCostRepeatableComponent implements OnInit {

  public projectCost = new FormGroup(
    {
      week : new FormControl(''),
      cost : new FormControl('')
    }
  )

  @Output('sendData') costEvent = new EventEmitter();
  @Output('deleteRow') delRow = new EventEmitter();
  @Input('rowNo') rowNo : number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  getData(){
    if(this.projectCost.value.week && this.projectCost.value.cost){
    this.costEvent.emit(this.projectCost.value)
    }
  }
  delete(){
    this.delRow.emit(this.projectCost.value);
  }
}
