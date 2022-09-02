let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}
let path = require("path")
function returnfoldername(filename)
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
 console.log(returnfoldername("resume.docx"));  // ---->document
 console.log(returnfoldername("xyz.abc"));   //----->others
