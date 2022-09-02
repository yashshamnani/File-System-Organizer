//  let fs = require("fs")
//  let path = require("path")
// function tree(dirpath)
// {
//      dirpath = dirpath!=undefined ? dirpath : process.cwd()
//     let content = fs.readdirSync(dirpath)
//     console.log(path.basename(dirpath))
//     for(let i=0;i<content.length;i++)
//     {
//         if((path.extname(path.join(dirpath,content[i])))=="")
//         {
//             console.log("\t>",content[i])
//         }
//         else{
//             console.log("\t",content[i])
//         }
//     }

// }
// module.exports = {
//     treefn : tree
// };

/////////////////////////////////////////
// let fs = require("fs");
// let path = require("path")
// function treefn(dirpath)
// {
//     // console.log("tree command executed ", dirpath!=undefined?dirpath:process.cwd())
//     dirpath = dirpath!=undefined ? dirpath:process.cwd();
//     let foldercontent = fs.readdirSync(dirpath)
//     console.log(foldercontent)
//     let folderbase = path.basename(dirpath)
//      console.log(folderbase);
//     for(let i=0;i<foldercontent.length;i++)
//     {
//         let pathofsub = path.join(dirpath,foldercontent[i]);
//         let ext = path.extname(pathofsub);
//         if(ext=="")
//         {
//            console.log(`    >`,foldercontent[i]);
//         }
//         else{
//            console.log(`     `,foldercontent[i])
//         }
//     }
// }

// module.exports =
// {
//     tree : treefn
// };