const chalk = require('chalk');
const getNotes = require('./notes.js');

const note = getNotes();

console.log(note);

console.log(chalk.green("Success!"));
console.log(chalk.bold.green.inverse("Testing an inverted green bold log!"));

