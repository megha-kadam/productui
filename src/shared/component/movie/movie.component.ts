import { Component } from "@angular/core";
import { movieArray } from "src/consts/movie";
import { Imovie } from "src/models/movie.interface";

@Component({
    selector : "app-movies",
    templateUrl : "./movie.component.html",
    styleUrls : ["./movie.component.scss"]
})
export class MovieComponent{
    movieArr : Array<Imovie> = movieArray;

    movie : string = "Movie Cards"
}