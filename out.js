class Cinema {
    // ctor:
    constructor() {
        this.HallsList = new Array(8);
        this.MoviesList = new Array(80);
    }
    get MoviesList() {
        return this._moviesList;
    }
    set MoviesList(moviesList) {
        this._moviesList = moviesList;
    }
    get HallsList() {
        return this._hallsList;
    }
    set HallsList(hallsList) {
        this._hallsList = hallsList;
    }
    // Check all the halls for wanted movie -> if found -> 
    // go to the `buySeats()` function. 
    BuyTickets(movieName, numOfTickets) {
        let res = false;
        // Check where is the movie - which hall:
        for (let i = 0; i < this.HallsList.length; i++) {
            if (this.HallsList[i] != undefined
                && this.HallsList[i].MyMovie.MovieName == movieName)
                // res will hold the success / failure
                res = this.HallsList[i].BuySeats(numOfTickets);
        }
        return res;
    }
    toString() {
        let res = `------- My Cinema ----------\n\n`;
        for (let i = 0; i < this.HallsList.length; i++) {
            if (this.HallsList[i] != undefined) {
                res += ` Hall number: ${i + 1} \n`;
                res += this.HallsList[i].toString();
            }
        }
        return res;
    }
}
class Hall {
    // ctor: get the movie from user, and init the seats
    constructor(movie) {
        // The user does not create that!! it will automatically be created
        // in the constructor. 
        this.Seats = new Array(8); // undefined
        this.MyMovie = movie;
        // init the seats: [[],[],[],[],[]]
        for (let row = 0; row < this.Seats.length; row++) {
            this.Seats[row] = new Array(6); // undefined
        }
    }
    get MyMovie() {
        return this._myMovie;
    }
    set MyMovie(movie) {
        this._myMovie = movie;
    }
    // The func will return true - if we bought tickets:
    BuySeats(numOfTickets) {
        // This loop will sum the empty seats in the hall:
        let emptySeats = 0;
        for (let row = 0; row < this.Seats.length; row++) {
            for (let col = 0; col < this.Seats[row].length; col++) {
                if (this.Seats[row][col] != true)
                    emptySeats++;
            }
        }
        // if there are not enough seats - return false:
        if (emptySeats < numOfTickets)
            return false;
        // if there are enough seats:
        for (let row = 0; row < this.Seats.length; row++) {
            for (let col = 0; col < this.Seats[row].length; col++) {
                // if seat is empty - fill with true
                if (this.Seats[row][col] != true) {
                    this.Seats[row][col] = true;
                    // Buy only the required amount: 
                    numOfTickets--;
                }
                if (numOfTickets == 0)
                    break;
            }
            if (numOfTickets == 0)
                break;
        }
        return true;
    }
    toString() {
        let res = `--- Movie: ${this.MyMovie.MovieName} ---\n`;
        res += `Seats: V - full\n\n`;
        for (const row of this.Seats) {
            for (const seat of row) {
                // if seat is full: `V`, else: `-`
                res += seat ? " V " : " - ";
            }
            res += `\n`;
        }
        return res;
    }
}
class Movie {
    constructor(movieName, year, directorName, length) {
        this.MovieName = movieName;
        this.Year = year;
        this.Director = directorName;
        this.Length = length;
    }
    // name:
    get MovieName() {
        return this._movieName;
    }
    set MovieName(m) {
        this._movieName = m;
    }
    // year
    get Year() {
        return this._year;
    }
    set Year(y) {
        if (y > 1990 && y < 2022)
            this._year = y;
    }
    // director:
    get Director() {
        return this._directorName;
    }
    set Director(d) {
        this._directorName = d;
    }
    // length:
    get Length() {
        return this._length;
    }
    set Length(len) {
        if (len > 0 && len < 130)
            this._length = len;
    }
    toString() {
        return `Movie: ${this.MovieName}, year: ${this.Year}, director: ${this.Director}, 
         length: ${this.Length}`;
    }
}
// Cinema:
// Movie: name + year + director + length
// Hall: seats[8][6]:boolean, movie:Movie
// Cinema: movies[80], halls[8], 
// orderTickets(movie, numOfTickets), 
// Program: 
let myCinema = new Cinema();
// create the movies:
let m1 = new Movie('Superman', 1999, 'X', 120);
let m2 = new Movie('Spiderman', 2000, 'Y', 100);
let m3 = new Movie('WonderWoman', 2010, 'Z', 99);
// create the halls:
let h1 = new Hall(m1);
let h2 = new Hall(m2);
let h3 = new Hall(m3);
// Add to the lists in cinema:
myCinema.MoviesList[0] = m1;
myCinema.MoviesList[1] = m2;
myCinema.MoviesList[2] = m3;
myCinema.HallsList[0] = h1;
myCinema.HallsList[1] = h2;
myCinema.HallsList[2] = h3;
// order tickets:
myCinema.BuyTickets('Superman', 13);
myCinema.BuyTickets('WonderWoman', 7);
// print the cinema:
console.log(myCinema.toString());
/*
------- My Cinema ----------
 Hall number: 1
--- Movie: Superman ---
Seats: V - full
 V  V  V  V  V  V
 V  V  V  V  V  V
 V  -  -  -  -  -
 -  -  -  -  -  -
 -  -  -  -  -  -
 -  -  -  -  -  -
 -  -  -  -  -  -
 -  -  -  -  -  -
 Hall number: 2
--- Movie: Spiderman ---
Seats: V - full
 -  -  -  -  -  -
 -  -  -  -  -  -
 -  -  -  -  -  -
 -  -  -  -  -  -
 -  -  -  -  -  -
 -  -  -  -  -  -
 -  -  -  -  -  -
 -  -  -  -  -  -
 Hall number: 3
--- Movie: WonderWoman ---
Seats: V - full
 V  V  V  V  V  V
 V  -  -  -  -  -
 -  -  -  -  -  -
 -  -  -  -  -  -
 -  -  -  -  -  -
 -  -  -  -  -  -
 -  -  -  -  -  -
 -  -  -  -  -  -
 */ 
//# sourceMappingURL=out.js.map