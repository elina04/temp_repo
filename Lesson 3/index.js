/*
======= 1st task =========

var Square = require("./module");
var mySquareObject = new Square(5);

function main(){
    console.log(mySquareObject.getArea());
}

main();
*/

/*
======= 2nd task =========

var fs = require('fs');

function main(){
    var file = "hello.txt";
    fs.appendFileSync(file,"Hello world\n");
}

main();
*/
/*
// ======= 3th task =========

var fs = require('fs');

function main(){
    fs.writeFileSync("hello.txt", "Hello world\n");
    console.log("fs.writeFile");
}

main();
*/

/*

======= 4th task =========
var fs = require('fs');
var dummyText = "Apple yep";

function main(){
    fs.writeFileSync("dummytext.txt", dummyText);
    var text = fs.readFileSync("dummytext.txt").toString();
    console.log(dummyText == text);
    console.log(text);
    fs.writeFileSync("undummytext.txt", 
        text.replace("Apple", "Microsoft")
    );
}

main();
*/

var obj = {
    "first_name": "Elina",
    "last_name": "Galstyan",
    "age": 13,
    "tumo_studnet": true
}

var stringify_obj = JSON.stringify(obj);
console.log(stringify_obj);