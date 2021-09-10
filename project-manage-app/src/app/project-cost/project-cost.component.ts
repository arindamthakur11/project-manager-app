import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataManageService } from '../services/data-manage.service';

@Component({
  selector: 'app-project-cost',
  templateUrl: './project-cost.component.html',
  styleUrls: ['./project-cost.component.scss']
})
export class ProjectCostComponent implements OnInit {

  organization = '';

  public projectsCost: Object[] = [
  ]
  public rows: number[] = [];
  public rowNos: number = 0;
  constructor(
    private dataService : DataManageService
  ) { }
  ngOnInit(): void {

  }
  getData(event: Event) {
    this.projectsCost.push(event);
  }

  deleteRow(event: Event) {
    this.projectsCost.splice(this.projectsCost.indexOf(event), 1);
  }

  addRow() {
    this.rows.push(++this.rowNos);
  }

  updateProject() {
    let reqBody = {
      organization: this.organization,
      cost: this.projectsCost
    }
    this.dataService.updateCost(reqBody)
  }
}
