import Player from "./entity/Player";

class Computer {
	constructor(bot) {
		this._bot = bot || new Player('bot')
	}
	choice(name) {
		if (name) return name
		return this._choiceRandom()
	}
	_choiceRandom() {
		let numRandom = Math.random()
		if (numRandom < this._bot.probabilities().stone) 
		return 'stone'
		
		numRandom -= this._bot.probabilities().stone
		if (numRandom < this._bot.probabilities().paper) 
		return 'paper'
		
		return 'scissors'
	}
}

export default Computer