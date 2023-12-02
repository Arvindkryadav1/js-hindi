//Immediately invoked function expressions (IIFE)

(function chai () {

    //named iife
  console.log(`DB CONNECTED`);
}) ();

( (name) => {
    console.log(`DB CONNECTED TWO ${name} `);
} )('Arvind')
