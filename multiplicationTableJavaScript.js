for(counter = 1; counter <= 12; counter++) {

	for(number = 1; number <= 12; number++) {

	multiplication = counter * number

	process.stdout.write(`${counter} X ${number} = ${multiplication}\t`)

	}
console.log()
}