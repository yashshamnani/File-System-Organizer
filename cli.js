 
let input = process.argv.slice(2);
let exec = input[0];
let dirpath = input[1];

let helpobj = require("C://Users//LENOVO//OneDrive//Desktop//web4//File__System_Organizer//commands//help.js")
 
let treeobj = require("C://Users//LENOVO//OneDrive//Desktop//web4//File__System_Organizer//commands//tree.js")
let organizeobj = require("C://Users//LENOVO//OneDrive//Desktop//web4//File__System_Organizer//commands//organize.js")
if(exec=="help")
{
     helpobj.help();
}
else if(exec=="tree")
{
    treeobj.tree(dirpath)
}
else if(exec=="organize")
{
     organizeobj.organize(dirpath)
}
else{
    console.log("command entered not available Type help to see list of commands")
}
