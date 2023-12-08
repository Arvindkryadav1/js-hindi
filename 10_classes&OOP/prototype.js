// let myName = "Arvind     "


// console.log(myName.truelength);



let myHeroes = ["Thor", "spiderman"]

let heroPower = {
    thor : "Hammer",
    spiderman : "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
   console.log(`hitesh is present in all objects`);
}

Array.prototype.arvind = function(){
    // console.log(`Arvind is present in array too`);
}

// heroPower.hitesh()

myHeroes.arvind()
// heroPower.arvind()



// inheritance

const User = {
    username : "Chai",
    email: "Chai@google.com"
}

const Teacher = {
    makeVideo : true,
}

const TeachingSupport = {
    isAvailable : true,
}

const TAsupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//Modern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

//------------------------------------

let anotherUserName = "Chaiaurcode        "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true length is: ${this.trim().length}`);
}
anotherUserName.trueLength()
"Arvind".trueLength()
"IceTea".trueLength()

