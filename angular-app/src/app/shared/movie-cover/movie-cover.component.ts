import {Component, Input} from '@angular/core';
import {Movie} from '../../models/movies';

@Component({
  selector: 'app-movie-cover',
  templateUrl: './movie-cover.component.html',
  styleUrls: ['./movie-cover.component.css']
})
export class MovieCoverComponent {
  @Input() movie: Movie;
}
