import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { HogwartsComponent } from './hogwarts/hogwarts.component';
import { HttpClientModule } from '@angular/common/http';
import { CharacterStudentTeacherComponent } from './character-student-teacher/character-student-teacher.component';
@NgModule({
  declarations: [
    AppComponent,
    HogwartsComponent,
    CharacterStudentTeacherComponent
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
