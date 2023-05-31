const buf1=Buffer.alloc(400)
const l=buf1.write("Hello world!!!")
console.log("length : ", l)
console.log(buf1.toString());
buf2=new Buffer("testing");
console.log(buf2.toString());
target=Buffer.alloc(buf2.length)
buf2.copy(target);
console.log(target.toString())