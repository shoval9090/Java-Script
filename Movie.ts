class Movie{
     // Private properties:
     private _movieName : string;
     private _year : number;
     private _directorName : string;
     private _length : number;
 
     // name:
     public get MovieName(){
         return this._movieName;
     }
     public set MovieName(m:string){
         this._movieName = m;
    }
 
    // year
     public get Year(){
         return this._year;
     }
     public set Year(y : number){
         if(y>1990 && y<2022)
            this._year = y;
     }
 
     // director:
     public get Director(){
         return this._directorName;
     }
     public set Director(d : string){
         this._directorName = d;
     }
     
     // length:
     public get Length(){
         return this._length;
     }
     public set Length(len : number){
         if(len >0 && len <130)
             this._length=len;
     }
     
     public constructor(movieName: string , year: number ,directorName: string , length: number){
         this.MovieName =movieName;
         this.Year = year;
         this.Director =directorName;
         this.Length = length;
     }
 
     toString() : string{
         return `Movie: ${this.MovieName}, year: ${this.Year}, director: ${this.Director}, 
         length: ${this.Length}`;
     }
}