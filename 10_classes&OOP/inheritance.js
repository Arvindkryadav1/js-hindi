class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username)
        this.email = email;
        this.password = password;

    }
    addCourse(){
        console.log(`New course was added by ${this.username}`);
    }
}

const chai = new Teacher("Arvind", "arvind@moxam.in", "12345")
chai.logMe()
// console.log(chai);

const masalaChai = new User("Masala Xhai", "mchai@m.com", "123")

masalaChai.logMe()

console.log(chai === masalaChai);
console.log(chai instanceof Teacher);
console.log(chai instanceof User);