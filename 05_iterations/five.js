const coding = ["JS", "Ruby", "JAVA", "python", "CPP"]

// coding.forEach(function (item) {
//     console.log(item);
// })

// coding.forEach( (items)=>{
//     console.log(items)
// })

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=>{
//    console.log(item, index, arr);
// })


const myCoding = [
    {
        languageName : "Javascript",
        languageFile: "js"
    },
    {
        languageName : "Java",
        languageFile: "java"
    },
    {
        languageName : "python",
        languageFile: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(`${item.languageFile} :- ${item.languageName}`);
})