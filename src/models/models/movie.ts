 class Movie {
     movieName: string;
     movieId: number;
     language: string;
     genre: string;
     duration: number;
     rating: number;

    constructor(
        movieName: string,
        movieId: number,
        language: string,
        genre: string,
        duration: number,
        rating: number
    ) {
        this.movieName = movieName;
        this.movieId = movieId;
        this.language = language;
        this.genre = genre;
        this.duration = duration;
        this.rating = rating;
    }

    public getMovieName(): string {
        return this.movieName;
    }

    public getMovieId(): number {
        return this.movieId;
    }

    public getLanguage(): string {
        return this.language;
    }

    public getGenre(): string {
        return this.genre;
    }

    public getDuration(): number {
        return this.duration;
    }

    public getRating(): number {
        return this.rating;
    }
}

const movie1 = new Movie(
    "GOT",
    101,
    "English",
    "Histaorical",
    164,
    8.5
);

console.log("========== MOVIE DETAILS ==========");

console.log("Movie Name     :", movie1.getMovieName());
console.log("Movie ID       :", movie1.getMovieId());
console.log("Language       :", movie1.getLanguage());
console.log("Genre          :", movie1.getGenre());
console.log("Duration       :", movie1.getDuration(), "minutes");
console.log("Movie Rating   :", movie1.getRating());

console.log("===================================");

