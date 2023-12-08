class User {
    constructor(username){
       this.username = username
    }

    logMe(){
        console.log(`username: ${this.username}`);
    }

    static createId(){
        return "123456"
    }
}

const arvind = new User("arvind")

// console.log(arvind.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.username = username;
        this.email= email;
    }
}

const iphone = new Teacher("iphone", "i@i.com")

console.log(iphone.createId());