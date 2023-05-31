const fs=require("fs");
//reading file asynchronously
fs.readFile("head.html",function(err,data){
    if(err){
        console.log("error occured",err);
    }
    else{
        //display data
        console.log(data.toString());
    }
})
//reading file asynchronously
fs.readFile("list.html",function(err,data){
    if(err){
        console.log("error ocuured",err);
    }else{
        //display data
        console.log(data.toString())
    }
})
console.log("before readfilesync")
//reading file synchronously
var d1=fs.readFileSync("test.txt")
console.log(d1.toString());
console.log("after readfilesync")