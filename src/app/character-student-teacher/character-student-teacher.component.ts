import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { CharacterService } from '../service/character.service';
import { StudentService } from '../service/student.service';
import { TeacherService } from '../service/teacher.service';

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
  selector: 'character-student-teacher',
  templateUrl: './character-student-teacher.component.html',
  styleUrls: ['./character-student-teacher.component.css']
})
export class CharacterStudentTeacherComponent implements OnInit {

  @Input() option:any;
  displayedColumns: string[] = ['name', 'patronus', 'age','image'];
  dataSource: MatTableDataSource<characterData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public charactersService:CharacterService,
    public studentService:StudentService,
    public teacherService:TeacherService
  ) {}
  actualDate = new Date 
  houses = [
    {value:'gryffindor',name:'Gryffindor'},
    {value:'hufflepuff',name:'Hufflepuff'},
    {value:'ravenclaw',name:'Ravenclaw'},
    {value:'slytherin',name:'Slytherin'}
]
charactersArray:any
  actualHouse:any = 'assets/images/logo.png'
  bar:boolean = false;
  load(data:any){
    this.dataSource = new MatTableDataSource(data);
    this.ngAfterViewInit()
  }
  getCharacters(house:string){
    this.bar = true;
    switch (house) {
      case 'gryffindor':
        this.charactersService.getCharactersByHouse(house).subscribe((charactersArray:any)=>{
        this.actualHouse = 'assets/images/gryffindor.png'
        this.charactersArray = charactersArray;
          this.load(charactersArray)
      })
        break;

      case 'hufflepuff':
        this.charactersService.getCharactersByHouse(house).subscribe((charactersArray:any)=>{
          this.actualHouse = 'assets/images/hufflepuff.png'
          this.charactersArray = charactersArray;
          this.load(charactersArray)
        })
        break;

      case 'ravenclaw':
        this.charactersService.getCharactersByHouse(house).subscribe((charactersArray:any)=>{
          this.actualHouse = 'assets/images/ravenclaw.png'
          this.charactersArray = charactersArray;
          this.load(charactersArray)
        })
        break;

      case 'slytherin':
        this.charactersService.getCharactersByHouse(house).subscribe((charactersArray:any)=>{
          this.actualHouse = 'assets/images/slytherin.png'
          this.charactersArray = charactersArray;
          this.load(charactersArray)
        })
        break;
    
      default:
        break;
    }

} 
getStudent(){
  this.actualHouse = 'assets/images/logo.png'
  this.bar = true;
  this.studentService.getStudents().subscribe((students:any)=>{
    this.dataSource = new MatTableDataSource(students);
    this.ngAfterViewInit()
  })
 }
 getTeacher(){
  this.actualHouse = 'assets/images/logo.png'
  this.bar = true;
  this.teacherService.getTeachers().subscribe((teacher:any)=>{
    this.dataSource = new MatTableDataSource(teacher);
    this.ngAfterViewInit()
  })
}
reset(){
    let data:any = []
    this.dataSource = new MatTableDataSource(data);
    this.ngAfterViewInit()
} 
  ngOnInit(){
  }
  ngAfterViewInit() {
    try {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  } catch (error) {
  }
  this.bar = false;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}


