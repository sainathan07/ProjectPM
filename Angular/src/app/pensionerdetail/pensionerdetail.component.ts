import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import {MatDialog,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogdetailComponent } from './dialogdetail/dialogdetail.component';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Manage } from '../manage.model';
import { ManageService } from '../manage.service';

@Component({
  selector: 'app-pensionerdetail',
  templateUrl: './pensionerdetail.component.html',
  styleUrls: ['./pensionerdetail.component.css']
})
export class PensionerdetailComponent implements OnInit {
  adhaarId:any;
  constructor(public service:ManageService,public dialog:MatDialog,private toastr:ToastrService) { }
  
  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(DialogdetailComponent, {
      width:'30%'
    });
  }

  resetForm(form:NgForm)
  {
    form.form.reset();
  }
}
