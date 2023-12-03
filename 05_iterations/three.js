// for of

["", "", ""]
[{}, {}, {}]


const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num)
}
const greetings = "Hello world!"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map()

map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('Fr', "France")
map.set('Aus', "Australia")

// console.log(map)

for (const [key, Value] of map) {
    // console.log(key +':-'+ Value);
}

const myObj = {
  Game1 : "NFS",
  Game2 : "PUBG",
  Game3 : "Valorant"
}

for (const [key, Value] of myObj) {
    console.log(`${key} : ${Value}`);
}