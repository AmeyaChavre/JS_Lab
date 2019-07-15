

(function someFunction()
{
var x = y = 20; // y gets declared in global scope
})();



/*
(function someFunction()
{
y = 20;
var x = y;
})();
*/


console.log("The value of y: ",y); 
console.log("The value of x: ",x);

/* output
The value of y:  20
ReferenceError: x is not defined
    at evalmachine.<anonymous>:20:32
    at Script.runInContext (vm.js:133:20)
    at Object.runInContext (vm.js:311:6)
    at evaluate (/run_dir/repl.js:133:14)
    at ReadStream.<anonymous> (/run_dir/repl.js:116:5)
    at ReadStream.emit (events.js:198:13)
    at addChunk (_stream_readable.js:288:12)
    at readableAddChunk (_stream_readable.js:269:11)
    at ReadStream.Readable.push (_stream_readable.js:224:10)
    at lazyFs.read (internal/fs/streams.js:181:12)
*/




