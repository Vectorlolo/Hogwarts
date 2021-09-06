import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(    
    private http: HttpClient,
    ) { }

    getCharactersByHouse(house:string) {
      return this.http.get(`http://hp-api.herokuapp.com/api/characters/house/${house}`);
    }
}
