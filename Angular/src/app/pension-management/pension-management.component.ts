import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Pensionerdetail } from '../shared.model';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-pension-management',
  templateUrl: './pension-management.component.html',
  styleUrls: ['./pension-management.component.css']
})
export class PensionManagementComponent implements OnInit {

  constructor(public service:SharedService, private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
   this.service.postPensioner().subscribe(
     res=>{
       this.resetForm(form);
       this.toastr.success('Submitted successfully','Payment Detail Registered')
     },
     err=>{console.log(err); }
   );
 }

 resetForm(form:NgForm)
 {
   form.form.reset();
   this.service.formData=new Pensionerdetail();
 }
}
