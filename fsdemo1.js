//fs=file system

//import builtin fs module

const fs=require("fs");
data=fs.readFileSync("test.txt")
console.log(data.toString())