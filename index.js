console.log = (...args) => stdout(args.join(" "))
console.info = (...args) => stdout(args.join(" "),1)
console.warn = (...args) => stdout(args.join(" "),2)
console.error = (...args) => stdout(args.join(" "),3)

function startDemo(){
stdin(GDgetPrompt()).then(input=>{
	Bash(input);
	setTimeout(startDemo,0);
})
}

console.log("Type 'help' for a list of commands.")
startDemo();