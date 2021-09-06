import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { StudentService } from '../service/student.service';
export interface characterData {
  name: string,
  species: string, 
  gender: string, 
  house: string, 
  dateOfBirth: string, 
  yearOfBirth: string,
  ancestry: string,
  eyeColour: string, 
  hairColour: string, 
  wand: {
  wood: string, 
  core: string,
  length: string, 
  },
  patronus: string, 
  hogwartsStudent: boolean,
  hogwartsStaff: boolean,
  actor: string, 
  alive: boolean,
  image: string, 
}


@Component({
  selector: 'student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  displayedColumns: string[] = [ 'name', 'patronus', 'age','image'];
  dataSource: MatTableDataSource<characterData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public studentService:StudentService
  ) {
    let characters:any = []
    this.dataSource = new MatTableDataSource(characters);
    this.paginator = characters
    this.sort = characters
   }

   actualHouse:any = 'assets/images/logo.png'
   actualDate = new Date 

   getStudent(){
    this.studentService.getStudents().subscribe((students:any)=>{
      this.dataSource = new MatTableDataSource(students);
    })
   }

  ngOnInit(): void {
    this.getStudent()
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
