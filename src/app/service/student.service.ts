import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(    
    private http: HttpClient,
    ) { }

    getStudents() {
      return this.http.get(`http://hp-api.herokuapp.com/api/characters/students`);
    }
}
