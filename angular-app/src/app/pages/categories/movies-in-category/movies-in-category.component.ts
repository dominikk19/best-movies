import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Movie} from '../../../models/movies';
import {HttpService} from '../../../services/http.service';

@Component({
  selector: 'app-movies-in-category',
  templateUrl: './movies-in-category.component.html',
  styles: []
})
export class MoviesInCategoryComponent implements OnInit {
  movies: Observable<Movie[]>;

  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.movies = this.httpService.getMovies();
  }

}
