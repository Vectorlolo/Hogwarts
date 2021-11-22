import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterStudentTeacherComponent } from './character-student-teacher.component';

describe('CharacterStudentTeacherComponent', () => {
  let component: CharacterStudentTeacherComponent;
  let fixture: ComponentFixture<CharacterStudentTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterStudentTeacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterStudentTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
