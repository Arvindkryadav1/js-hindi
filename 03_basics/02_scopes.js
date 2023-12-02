// let a = 300

// if (true) {
//     let a = 10
//    const b = 20
// console.log("INNER :", a)
// }


// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

// console.log(a);
// console.log(b);
// console.log(c);

//+++++++++++++++++++++=Nested Scope+++++++++++++++++++++++

function one() {
    const userName = "Arvind"
    // console.log(userName);

    function two() {
        const website = "YouTube"

        console.log(userName);
    }

    // console.log(website)
    // two()
}
// one()



if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

console.log(addOne(5))
function addOne(num) {
   return num + 1
   
}

console.log(addTwo(6))

const addTwo = function (num) {
    return num + 2
}


