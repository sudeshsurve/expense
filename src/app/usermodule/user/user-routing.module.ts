import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ExpenseFormComponent } from './expense-form/expense-form.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ExpenseReportComponent } from './expense-report/expense-report.component';
import { TotalExpenseReportComponent } from './total-expense-report/total-expense-report.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path :"" , component:AdminComponent,
  children:[
  {path:"" , pathMatch:'full' , redirectTo:'/admin/dashbord' },
  {path:"dashbord", component:DashbordComponent },
  {path:"user-list", component:UserListComponent },
  {path:"user-form", component:UserFormComponent },
  {path:"expense-report", component:ExpenseReportComponent },
  {path:"expense-list", component:ExpenseListComponent },
  {path:"totla-expense-report", component:TotalExpenseReportComponent },
  {path:"expense-form", component:ExpenseFormComponent },

  ]

} 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
