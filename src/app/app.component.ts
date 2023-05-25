import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { DataShareService } from './data-share.service';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from './services/employee.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  displayedColumns: string[] = [
    'id', 
    'firstName',
    'lastName', 
    'email', 
    'dob', 
    'gender', 
    'company', 
    'education', 
    'experience', 
    'package'
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private _dialog: MatDialog,
    private _empService : EmployeeService,
    // private dataService: DataShareService
  ){}



  // displayedColumns: string[] = ['firstName', 'lastName', 'email', 'dob', 'gender', 'company', 'education', 'experience', 'package'];
  // dataSource: any = [];


  ngOnInit(): void {
    // this.dataService.myBehaviorSubject.subscribe((value: any) => {
    //   this.dataSource.push(value);
    // });
    this.getEmployeeList()
  }

  openAddEditEmpForm() {
    this._dialog.open(EmpAddEditComponent)
  }

  getEmployeeList(){
    this._empService.getEmployeeList().subscribe({
      next:(res) => {
        this.dataSource = new MatTableDataSource(res)
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator
      },error:console.log
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
