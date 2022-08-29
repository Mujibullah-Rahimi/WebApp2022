// Benytter en innebygget modul fra Node for å lese fra terminalen
const readline = require("readline");

// Setter opp nødvendige konfigurasjon
// Les fra kommandolinjen og skriv ut til kommandolinjen
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const language = "Node";
const translations = {
    no:{

    },
    en:{
        
    }
}

var prompt = require('prompt-sync')();
//
// get input from the user.
//
var n = prompt('How many more times? ');

