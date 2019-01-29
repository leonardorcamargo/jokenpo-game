import program from 'commander'
import Computer from './Computer'

class Commander {
	start() {
		program
			.version('1.0.0')
			.option('-c --choice <move>', 'Choice a move [stone, paper, scissors]', /^(stone|paper|scissors)$/i, 'stone')
			.option('-p --play', 'Play the game', this.letsPlay())
			.parse(process.argv)
	}

	letsPlay() {
		const choice = program.choice
		const computer = new Computer()
		const pcChoice = computer.choice()

		if (pcChoice === choice) {
			console.log('draw!')
		} else if (pcChoice === 'stone') {
			if (choice === 'paper') {
				console.log('you lose!')
			} else {
				console.log('you win!')
			}
		} else if (pcChoice === 'paper') {
			if (choice === 'scissors') {
				console.log('you win!')
			} else {
				console.log('you lose!')
			}
		} else if (pcChoice === 'scissors') {
			if (choice === 'stone') {
				console.log('you win!')
			} else {
				console.log('you lose!')
			}
		}

	}
}

export default Commander