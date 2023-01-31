import { Component, OnInit } from '@angular/core';
import { FilmserviceService } from '../../services/filmservice.service';
import { Films } from '../../models/films';
@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  listado = new Array();
  gradients = [['#b85dfd', '#45fcf7'], ['#f9a1a7', '#45fcf2'], ['#ebedcc', '#fc855e']];
  random = Math.floor(Math.random())

  constructor(private filmServices : FilmserviceService) { }

  ngOnInit(): void {
    this.filmServices.getAllFilms().subscribe({
      next: (AllFilms:Films[]) => this.listado= AllFilms,
      error: (e) => console.error(e),
      complete :() => console.info("La API devolvio todos los registros")
    });
  }
  
   counter = 0;
  generateRandom() {
    if (this.counter === this.gradients.length) {
     this.counter = 0;
    }
    return this.counter++;
  }

}
