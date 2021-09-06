import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(    
    private http: HttpClient,
    ) { }

    getTeachers() {
      return this.http.get(`http://hp-api.herokuapp.com/api/characters/staff`);
    }
}
