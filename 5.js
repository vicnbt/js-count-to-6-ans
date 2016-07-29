var source = process.argv.slice(2),res;

res = Math.min(...source);

console.log("The minimum of ["+ source.join(",")+"] is", res);
