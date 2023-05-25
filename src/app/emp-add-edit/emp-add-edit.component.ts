import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataShareService } from '../data-share.service';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.css']
})


export class EmpAddEditComponent {
  empForm: FormGroup

  education: string[] = [
    "matric",
    "Post Graduation",
    "Graduation",
    "Diploma",
    "Intermediate"
  ]

  constructor(private _fb: FormBuilder,
    // private _dialog: MatDialog,
    // private dataService: DataShareService
    private _empService :EmployeeService
    ) {
    this.empForm = this._fb.group({
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      company: '',
      education: '',
      experience: '',
      package: ''
    })
  }
  onSubmit() {
    // this.dataService.myBehaviorSubject.next(this.empForm.value);
    // this._dialog.closeAll()

    if(this.empForm.valid)[
      this._empService.addEmployee(this.empForm.value).subscribe({
        next:(val :any) =>{
          alert('Employee added sucessfully')
        },
        error:(err:any) =>{
          console.error
        }
      })
    ]
  }
}
