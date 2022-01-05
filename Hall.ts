class Hall{

    
    private _myMovie:Movie;
    public get MyMovie(){
        return this._myMovie;
    }
    public set MyMovie(movie : Movie){
        this._myMovie = movie;
    }

    // The user does not create that!! it will automatically be created
    // in the constructor. 
    public Seats:boolean[][] = new Array<Array<boolean>>(8); // undefined
    
    // ctor: get the movie from user, and init the seats
    public constructor(movie:Movie){
        this.MyMovie = movie;

        // init the seats: [[],[],[],[],[]]
        for (let row = 0; row < this.Seats.length; row++) {
            this.Seats[row] = new Array<boolean>(6); // undefined
        }
    }

    // The func will return true - if we bought tickets:
    BuySeats(numOfTickets:number):boolean{

        // This loop will sum the empty seats in the hall:
        let emptySeats = 0;
        for (let row = 0; row < this.Seats.length; row++) {
            for (let col = 0; col < this.Seats[row].length; col++) {
                if(this.Seats[row][col] != true) emptySeats++;
            }
        }

        // if there are not enough seats - return false:
        if(emptySeats < numOfTickets) return false;

        // if there are enough seats:
        for (let row = 0; row < this.Seats.length; row++) {
            for (let col = 0; col < this.Seats[row].length; col++) {
                // if seat is empty - fill with true
                if(this.Seats[row][col] != true){
                    this.Seats[row][col] = true;
                    // Buy only the required amount: 
                    numOfTickets--;
                }
                if(numOfTickets == 0) break;
            }
            if(numOfTickets == 0) break;
        }
        return true;
    }


    toString():string{
        let res = `--- Movie: ${this.MyMovie.MovieName} ---\n`;
        res += `Seats: V - full\n\n`
        for (const row of this.Seats) {
            for (const seat of row) {
                // if seat is full: `V`, else: `-`
                res += seat ? " V ": " - "
            }
            res += `\n`
        }
        return res;
    }
}