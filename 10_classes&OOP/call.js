function setUsername (username){
    //complex db calls
    this.username = username
    console.log("Called");
}

function createUser(username, email, password){
      setUsername.call(this, username)
      this.email = email;
      this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "1234")

console.log(chai);