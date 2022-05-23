import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PensionerdetailComponent } from './pensionerdetail/pensionerdetail.component';
import { PensionManagementComponent } from './pension-management/pension-management.component';
const routes: Routes = [
  {
    path: 'pensionerdetail',
    component:PensionerdetailComponent},
  {
    path:'pensionmanagement',
    component:PensionManagementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
