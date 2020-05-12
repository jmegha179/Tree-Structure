import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './Service/employee';
import { Emplyee } from './Model/employee-model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ExpenseModelComponent } from './Component/expense-model/expense-model.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  /**
   * Used to store Employee Information
   */
  Employee: Emplyee[];

  /**
   * Used to store Model value
   */
  bsModalRef: BsModalRef;

  constructor(private service: EmployeeService, private modalService: BsModalService) {
  }

  ngOnInit() {
    this.service.getAll().subscribe(employee => {
      this.Employee = employee;
    });
  }

  openModalWithClass(id) {
    console.log(id);
    const testArray = this.Employee.find(tree => tree.Id === id);
    const initialState = {
      expenseDetail: testArray
    };
    const config = {
      animated: true,
      keyboard: true,
      backdrop: true,
      ignoreBackdropClick: false,
      class: 'my-modal'
    };
    this.bsModalRef = this.modalService.show(ExpenseModelComponent, Object.assign({initialState}, config));
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
