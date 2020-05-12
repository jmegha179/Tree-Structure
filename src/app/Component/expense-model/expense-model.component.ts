import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-expense-model',
  templateUrl: './expense-model.component.html',
  styleUrls: ['./expense-model.component.css']
})
export class ExpenseModelComponent implements OnInit {

  /**
   * Used to store array for calculation
   */
  expenseDetail: any;

  /**
   * Manager level sum;
   */
  managerSum = 0;

  /**
   * Department level sum
   */
  departmentSum = 0;
  constructor(public bsModalRef: BsModalRef, public bsModalService: BsModalService) {
  }

  ngOnInit(): void {
    console.log(this.expenseDetail);
    this.expenseDetail.Manager.map(manager => {
      manager.reportingPerson.map(reportee => {
        this.managerSum += reportee.expense;
        this.departmentSum = manager.expense + this.managerSum;
       });
    });
    console.log(this.managerSum);
  }

}
