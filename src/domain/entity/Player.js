class Player {
	constructor({ name, probabilities}) {
		this._name = name || 'bot'
		this._probabilities = probabilities || {
			stone: 0.33,
			paper: 0.33,
			scissors: 0.33
		}
	}

	name() {
		return this._name
	}

	probabilities() {
		return this._probabilities
	}
}

export default Player