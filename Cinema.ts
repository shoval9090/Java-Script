class Cinema{

    // moviesList
    private _moviesList:Movie[];
    public get MoviesList(){
        return this._moviesList;
    }
    public set MoviesList(moviesList : Movie[]){
        this._moviesList = moviesList;
    }

    // hallsList
    private _hallsList:Hall[];
    public get HallsList(){
        return this._hallsList;
    }
    public set HallsList(hallsList : Hall[]){
        this._hallsList = hallsList;
    }

    // ctor:
    public constructor(){
        this.HallsList = new Array<Hall>(8);
        this.MoviesList = new Array<Movie>(80);
    }

    // Check all the halls for wanted movie -> if found -> 
    // go to the `buySeats()` function. 
    BuyTickets(movieName:string, numOfTickets:number):boolean{
        let res:boolean = false;
        
        // Check where is the movie - which hall:
        for (let i = 0; i < this.HallsList.length; i++) {
            if(this.HallsList[i] != undefined 
                && this.HallsList[i].MyMovie.MovieName == movieName)
                // res will hold the success / failure
                res = this.HallsList[i].BuySeats(numOfTickets);
        }
        return res;
    }

    toString():string{
        let res = `------- My Cinema ----------\n\n`
        for (let i = 0; i < this.HallsList.length; i++) {
            if(this.HallsList[i] != undefined){
                res += ` Hall number: ${i+1} \n`
                res += this.HallsList[i].toString();
            }
        }
        return res;
    }
}
