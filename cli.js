//1.take input
//nodejs cli.js help     
//nodejs cli.js tree
//nodejs cli.js organize
// let path = require("path")
// let helpobj = require("C://Users//LENOVO//OneDrive//Desktop//web4//11may_FileSystemOrganizer//commands//help.js")
// let organizeobj = require(path.join(process.cwd(),"commands","organize.js"))
// let treeobj = require(path.join(process.cwd(),"commands","tree.js"))
// let arr = process.argv.slice(2)
// let dirpath = arr[1]
 
// if(arr[0]=='help')
// {
//     helpobj.helpfn();
// }
// else if(arr[0]=='tree')
// {
//      treeobj.treefn(dirpath)
// }
// else if(arr[0]=='organize')
// {
//     organizeobj.organizefn(dirpath);
// }
// else{
//     console.log("wrong command . type help to see all commands")
// }
//////////////////////////////////////////////

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