import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../services/http.service';
import {Observable} from 'rxjs';
import {Movie} from '../../models/movies';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styles: []
})
export class MoviesComponent implements OnInit {
  movies: Observable<Movie[]>;

  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.movies = this.httpService.getMovies();
  }

}
