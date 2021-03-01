import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MovieCoverComponent} from './shared/movie-cover/movie-cover.component';
import {CategoriesComponent} from './pages/categories/categories.component';
import {MoviesInCategoryComponent} from './pages/categories/movies-in-category/movies-in-category.component';
import {MoviesComponent} from './pages/movies/movies.component';
import {MoviesDetailsComponent} from './pages/movies/movies-details/movies-details.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MovieCoverComponent,
    CategoriesComponent,
    MoviesInCategoryComponent,
    MoviesComponent,
    MoviesDetailsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
