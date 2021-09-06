import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { CharactersComponent } from './characters/characters.component';
import { HogwartsComponent } from './hogwarts/hogwarts.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TeacherComponent,
    CharactersComponent,
    HogwartsComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
