import { Component } from '@angular/core';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  movies:any=[];

  constructor(private MovieService: MovieService) {}

  ngOnInit() {
    this.movies = this.MovieService.getMovies();
    console.log(this.movies);
  }

}
