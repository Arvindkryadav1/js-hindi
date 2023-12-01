const tinderUser = new Object()

tinderUser.id = "i8"
tinderUser.name = "Sammy"
tinderUser.age = 25
tinderUser.location = "Bhagalpur"

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName : {
        userFullName:{
            fname: "Arvind",
            lname: "Yadav"
        }
    }
}

// console.log(regularUser.fullName.userFullName)

const obj1= {
    1: "a",
    2: "b",
}
const obj2= {
    3: "c",
    4: "d",
}
const obj4= {
    5: "e",
    6: "f",
}

// const obj3 = Object.assign({}, obj1, obj2, obj4)
// const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3)

// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));


const course = {
    courseName: "JS in Hindi",
    price: 999,
    courseInstructor: "Hitesh Choudhary"
}
// console.log(course.courseInstructor)

const {courseInstructor: Instructor} = course
console.log(Instructor)

