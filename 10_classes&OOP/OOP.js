const user = {
    username: "Hitesh",
    loginCount : 8,
    signedIn: true,

    getUserDetailes: function(){
        // console.log(this.username);
        console.log(this);
    }
}

// console.log(user.getUserDetailes());

//constructor function

function User(username, loginCount, isLoggedIn) {
     this.username = username;
     this.loginCount = loginCount;
     this.isLoggedIn = isLoggedIn;

     return this
}
const userOne = new User("Arvind", 9, true)
const userTwo = new User("Chai aur code", 14, false)

// console.log(userOne.constructor);
// console.log(userTwo);

// read "about instance" of from google

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  const auto = new Car('Honda', 'Accord', 1998);
  
  console.log(auto instanceof Car);
  // Expected output: true
  
  console.log(auto instanceof Object);
  // Expected output: true
  