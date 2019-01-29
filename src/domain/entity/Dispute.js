import Round from './Round'

class Dispute {
	constructor(player, enemy) {
		this._player = player
		this._enemy = enemy
		this._rounds = []
	}

	newRound(win) {
		this._rounds.push(win)
	}

	player() {
		return this._player
	}

	enemy() {
		return this._enemy
	}

	rounds() {
		return this._rounds
	}
}

export default Dispute