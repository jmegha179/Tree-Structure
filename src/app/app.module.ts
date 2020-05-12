import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EmployeeService } from './Service/employee';
import { HeaderComponent } from './Component/header/header.component';
import { ExpenseModelComponent } from './Component/expense-model/expense-model.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExpenseModelComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    ModalModule.forRoot()
  ],
  providers: [EmployeeService],
  entryComponents: [ExpenseModelComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
