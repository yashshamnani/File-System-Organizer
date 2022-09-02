// function help()
// {
//     console.log(`commands you can put are
//     1. node cli.js help        // astrique is used to give space jaisa likha he vaisa he print hojayega
//     2. node cli.js tree
//     3. node cli.js organize`)
// }
 
// module.exports = {
//     helpfn : help
// };

/////////////////////////////////////

function helpfn()
{
    console.log(`commands you can put are
                 1 node cli.js help
                 2 node cli.js tree
                 3 node cli.js organize`);
}

module.exports = {
    help : helpfn
}