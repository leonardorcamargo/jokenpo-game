class Round {
	constructor(win) {
		this._win = win
		this._draw = winner === undefined
	}

	win() {
		return this._win
	}

	draw() {
		return this._draw
	}
}

export default Round