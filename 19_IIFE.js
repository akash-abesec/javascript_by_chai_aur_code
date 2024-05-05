//==== Immediately Invoked Function Expression (IIFE) ==== //

function chai(){
    console.log(`DB CONNECTED`);
}
chai()  // => DB CONNECTED

(function code(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();    // => DB CONNECTED

( (name) => {
    console.log(`DB CONNECTED2`);
}) ('hitesh')