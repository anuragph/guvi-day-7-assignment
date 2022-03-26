/* =========================================
DAY-7 ASSIGNEMNT

Assignment link: https://docs.google.com/document/d/12wAX28odaaCy4IWdlX3QQ3LOrBB3UXLsMD99X1Ve1Uc/edit
============================================
*/


/* ========================================
1. Class - Movie
Question link: https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md
===========================================
*/

class Movie {
  constructor(title, studio, rating='PG') {
    this.title = title
    this.studio = studio
    this.rating = rating
  }

  static getPG(arr) {
    let result = []

    for(let film of arr) {
      if(film.rating === 'PG') {
        result.push(film.title)
      }
    }  
    return result
  }
}

// Create sample movie objects.
let casinoRoyale = new Movie('Casino Royale', 'Eon Productions', 'PG13')
let nightAtTheMuseum = new Movie('Night at the Museum', '20th Century Fox', 'PG')
let theMatrix = new Movie('The Matix', 'Warner Bros.', 'R')
let hpChamberOfSecrets = new Movie('Harry Potter and the Chamber of Secrets', 'Warner Bros. Pictures')

let someMovies = [casinoRoyale, nightAtTheMuseum, theMatrix, hpChamberOfSecrets]

console.log(Movie.getPG(someMovies))
// OUTPUT:
// ['Night at the Museum', 'Harry Potter and the Chamber of Secrets']

for(let someMovie of someMovies) {
  console.log(`Title: ${someMovie.title} | Studio: ${someMovie.studio} | Rating: ${someMovie.rating}`)
}
// OUTPUT:
// Title: Casino Royale | Studio: Eon Productions | Rating: PG13
// Title: Night at the Museum | Studio: 20th Century Fox | Rating: PG
// Title: The Matix | Studio: Warner Bros. | Rating: R
// Title: Harry Potter and the Chamber of Secrets | Studio: Warner Bros. Pictures | Rating: PG


/* ========================================
2. Circle - Class
Question link: https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md
===========================================
*/

class Circle {
  constructor(radius=1.0, color='red') {
    this.radius = radius
    this.color = color
  }

  getRadius() {
    return this.radius
  }
  setRadius(r) {
    this.radius = r
  }
  getColor() {
    return this.color
  }
  setColor(c) {
    this.color = c
  }
  toString() {
    return `Circle[radius=${this.radius}, color=${this.color}]`
  }
  getArea(){
    return Math.PI * (this.radius ** 2)
  }
  getCircumference(){
    return 2 * Math.PI * this.radius
  }
}


let circle1 = new Circle()
console.log(circle1.toString())
// OUTPUT: Circle[radius=1, color=red]

let circle2 = new Circle(2.0)
console.log(circle2.toString())
// OUTPUT: Circle[radius=2, color=red]

let circle3 = new Circle(3.0, 'blue')
console.log(circle3.toString())
// OUTPUT: Circle[radius=3, color=blue]

console.log(circle1.getRadius())
// OUTPUT: 1

circle1.setRadius(5)
console.log(circle1.toString())
// OUTPUT: Circle[radius=5, color=red]

console.log(circle1.getColor())
// OUTPUT: red

circle1.setColor('orange')
console.log(circle1.toString())
// OUTPUT: Circle[radius=5, color=orange]

console.log(circle2.toString())
// OUTPUT: Circle[radius=2, color=red]

console.log(circle2.getArea())
// OUTPUT: 12.566370614359172

console.log(circle3.getCircumference())
// OUTPUT: 18.84955592153876


/* =========================================
3. Write a “person” class to hold all the details.
============================================
*/

class Person {
  constructor(fname, lname, age, gender, address) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.gender = gender;
    this.address = address;
  }
}

let person1 = new Person('John', 'Doe', 20, 'Male', 'Goa');
console.log(
`First name: ${person1.fname}
Last name: ${person1.lname}
Age: ${person1.age}
Gender: ${person1.gender}
Address: ${person1.address}
`
);
// OUTPUT:
// First name: John
// Last name: Doe
// Age: 20
// Gender: Male
// Address: Goa


/* ========================================
4. Write a class to calculate uber price.
===========================================
*/

class Uber {
  constructor(type, time, distance) {
    this.type = type;
    this.time = time;
    this.distance = distance;
  }
  

  getPrice() {
    let priceList = {
      ubermoto: {
        base: 15,
        minimum: 20,
        perMinute: 0,
        perKm: 5
      },

      uberpool: {
        base: 31.50,
        minimum: 42,
        perMinute: 1.58,
        perKm: 6.30
      },

      ubergo: {
        base: 31.50,
        minimum: 42,
        perMinute: 1.05,
        perKm: 6.30
      },

      uberx: {
        base: 44.10,
        minimum: 52.50,
        perMinute: 1.26,
        perKm: 7.35
      },

      uberxl: {
        base: 52.50,
        minimum: 84,
        perMinute: 2.10,
        perKm: 14.70
      }
    }
    
    let type = this.type.toLowerCase()
    
    // Calculate price for given time and distance.
    let price = priceList[type]['base'] + (priceList[type]['perMinute'] * this.time) + (priceList[type]['perKm'] * this.distance)
    
    // Check if calculated price is less than minimum price.
    if(price < priceList[type]['minimum']) {
      price = priceList[type]['minimum']
    } else {
      price = price.toFixed(2)
    }

    return `The price for your ${this.type} is Rs. ${price}.\nTotal time taken: ${this.time} min(s) | Total distance travelled: ${this.distance} km(s)`;
  }
}


// Create objects with -> (type, time, distance).
let ride1 = new Uber('uberMoto', 12, 10)
let ride2 = new Uber('uberPool', 30, 15)
let ride3 = new Uber('uberGo', 1, 1)
let ride4 = new Uber('uberX', 60, 45)
let ride5 = new Uber('uberXL', 55, 30)

console.log(ride1.getPrice())
console.log(ride2.getPrice())
console.log(ride3.getPrice())
console.log(ride4.getPrice())
console.log(ride5.getPrice())

// OUTPUT:
// The price for your uberMoto is Rs. 65.00.
// Total time taken: 12 min(s) | Total distance travelled: 10 km(s)

// The price for your uberPool is Rs. 173.40.
// Total time taken: 30 min(s) | Total distance travelled: 15 km(s)

// The price for your uberGo is Rs. 42.
// Total time taken: 1 min(s) | Total distance travelled: 1 km(s)

// The price for your uberX is Rs. 450.45.
// Total time taken: 60 min(s) | Total distance travelled: 45 km(s)

// The price for your uberXL is Rs. 609.00.
// Total time taken: 55 min(s) | Total distance travelled: 30 km(s)


/* === END OF SCRIPT === */