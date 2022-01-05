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