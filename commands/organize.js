// let path = require("path")
// let fs = require("fs")
// let types = {
//     media: ["mp4", "mkv", "mp3"],
//     archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
//     documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
//     app: ['exe', 'dmg', 'pkg', "deb"]
// };
// function organize(dirpath)
// {
//     dirpath = dirpath!=undefined ? dirpath : process.cwd()
//       helper(dirpath)
// }

// function helper(dirpath)
// {
//     let organizeddirpath = path.join(dirpath,"organized_dir")
//     if(fs.existsSync(organizeddirpath)==false)
//     {
//         fs.mkdirSync(organizeddirpath)
//     }
//     let names = fs.readdirSync(dirpath)
//     for(let i=0;i<names.length;i++)
//     {
//         let isfile = isFile(names[i],dirpath)
//         // console.log(isfile)
//         if(isfile)
//         {
//             let istype = isType(dirpath,names[i])
//             //console.log(istype)
//             let originalfilepath = path.join(dirpath,names[i])
//             typefolder = path.join(organizeddirpath,istype)
//             if(fs.existsSync(typefolder)==false)
//             {
//                 fs.mkdirSync(typefolder)
//             }
//             copytothattype(originalfilepath,typefolder)
            
            
//         }
//     }
//     for(let i=0;i<names.length;i++)
//     {
//         let pathoffile = path.join(dirpath,names[i])
//         let fileorno = fs.lstatSync(pathoffile).isFile();
//         if(fileorno==true)
//         {
//             fs.unlinkSync(pathoffile)
//         }
//     }

// }
// function copytothattype(originalfilepath,typefolder)
// {   
//     let base = path.basename(originalfilepath)
//     let dst = path.join(typefolder,base)
//     fs.copyFileSync(originalfilepath,dst)
// }
// function isType(dirpath,name)
// {
     
//     let filename = path.join(dirpath,name)
//     let ext  = path.extname(filename)
//     ext = ext.slice(1);
//     for(let key in types)
//     {
//         for(let i=0;i<types[key].length ;i++)
//         {
//             if(types[key][i]==ext)
//             {
                 
//                 return key;
//             }
//         }
//     }
//     return "others"
// }

// function isFile(name,dirpath)
// {
//     let filepath = path.join(dirpath,name)
//     let fileornot = fs.lstatSync(filepath).isFile();
//     return fileornot
// }




// module.exports = {
//     organizefn : organize
// };
 

////////////////////////////////////////////////
let types = {
    media: ["mp4", "mkv", "mp3","png"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
};
let path = require("path");
let fs = require("fs");
 
function organizefn(dirpath)
{
     dirpath = dirpath!=undefined?dirpath:process.cwd();
     helper(dirpath);
}
function helper(dirpath)
{
    //create a organizedfile dir inside dirpath
    let organizeddirpath = path.join(dirpath,"organizedfiles");
    if(fs.existsSync(organizeddirpath)==false)
    {
        fs.mkdirSync(organizeddirpath);
    }
    // content of dirpath
    let names = fs.readdirSync(dirpath)
    for(let i=0;i<names.length;i++)
    {
        //only get the files
        if(isFile(names[i],dirpath)==true)
        {
            //chect type of file from object types check extname
            let type = isType(names[i])
            let typefolderpath = path.join(organizeddirpath,type)
            let srcpath = path.join(dirpath,names[i])
            let dstpath = path.join(typefolderpath,names[i])
            if(fs.existsSync(typefolderpath)==false)
            {
                fs.mkdirSync(typefolderpath)
            }
            //copy file from dirpath to orgaized file and then delete
            fs.copyFileSync(srcpath,dstpath)
            fs.unlinkSync(srcpath);
        }
    }
    
}
function isFile(name,dirpath)
{
  let filepath = path.join(dirpath,name);
  return fs.lstatSync(filepath).isFile();
}

function isType(filename)
{
    let ext = path.extname(filename)
    ext = ext.slice(1)
     for(let key in types)
     {
        let arr = types[key];
        for(let i=0;i<arr.length;i++)
        {
           let final = arr[i];
           if(final==ext)
           {
            return key;
           }
        }
     }
     return "others"
}
module.exports = {

    organize : organizefn
}