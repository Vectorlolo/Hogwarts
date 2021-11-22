import { BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { MatTableDataSource } from '@angular/material/table';
import { CharacterStudentTeacherComponent } from './character-student-teacher/character-student-teacher.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mobileQuery: MediaQueryList;

  title:string = 'Hogwarts';
  showFiller:boolean = false;
  option:string = 'hogwarts'

  @ViewChild("characterStudentTeacher")characterStudentTeacher:CharacterStudentTeacherComponent

  ngOnInit() {
  }

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
 optionChange(value:any){
   try {
  this.option = value
  this.characterStudentTeacher.reset()
   switch (value) {
    case 'character':
    break;
    
    case 'student':
      this.characterStudentTeacher.getStudent();
    break;

     case 'teacher':
       this.characterStudentTeacher.getTeacher();
    break;
   
     default:
       break;
   }
  } catch (error) {
  }
 }
}
