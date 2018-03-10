console.log("Hello Node");

var os = require("os");
var message = "The platform is ";

function main(){
    console.log(message + os.platform());
}

main();