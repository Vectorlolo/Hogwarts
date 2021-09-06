import { Component, OnInit,ViewChild } from '@angular/core';
import { CharacterService } from '../service/character.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
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
  selector: 'characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})


export class CharactersComponent implements OnInit {
  displayedColumns: string[] = [ 'name', 'patronus', 'age','image'];
  dataSource: MatTableDataSource<characterData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
   public charactersService:CharacterService
  ) {
    let characters:any = []
    this.dataSource = new MatTableDataSource(characters);
    this.paginator = characters
    this.sort = characters

  }

  houses = [
    {value:'gryffindor',name:'Gryffindor'},
    {value:'hufflepuff',name:'Hufflepuff'},
    {value:'ravenclaw',name:'Ravenclaw'},
    {value:'slytherin',name:'Slytherin'}
]
  actualHouse:any = 'assets/images/logo.png'
  actualDate = new Date 
  getCharacters(house:string){
      switch (house) {
        case 'gryffindor':
          this.charactersService.getCharactersByHouse(house).subscribe((charactersArray:any)=>{
          this.actualHouse = 'assets/images/gryffindor.png'
          this.dataSource = new MatTableDataSource(charactersArray);
        })
          break;

        case 'hufflepuff':
          this.charactersService.getCharactersByHouse(house).subscribe((charactersArray:any)=>{
            this.actualHouse = 'assets/images/hufflepuff.png'
            this.dataSource = new MatTableDataSource(charactersArray);
          })
          break;

        case 'ravenclaw':
          this.charactersService.getCharactersByHouse(house).subscribe((charactersArray:any)=>{
            this.actualHouse = 'assets/images/ravenclaw.png'
            this.dataSource = new MatTableDataSource(charactersArray);
          })
          break;

        case 'slytherin':
          this.charactersService.getCharactersByHouse(house).subscribe((charactersArray:any)=>{
            this.actualHouse = 'assets/images/slytherin.png'
            this.dataSource = new MatTableDataSource(charactersArray);
          })
          break;
      
        default:
          break;
      }
  } 
  ngOnInit(): void {
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
