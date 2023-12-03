const myObj = {
    js: 'Javascript',
    cpp: 'C++',
    rb : 'ruby on rails',
    swift : 'Swift by apple'
}

for (const key in myObj) {
    console.log(`${key} :- ${myObj[key]}`)
}

