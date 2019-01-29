import { strict as assert, ok} from 'assert'
import Computer from '../domain/Computer'

const { deepEqual } = assert

describe('Testes de funções do jogo Jokenpo', () => {
	it('deve pegar jogada do computador como "stone"', () => {
		const expect = 'stone'
		const result = new Computer().choice('stone')
		deepEqual(result, expect)
	})
	it('deve pegar jogada do computador sendo aleatória', () => {
		const expect = ['stone', 'paper', 'scissors']
		const result = new Computer().choice()
		if (expect.find(choice => choice === result))
			return ok(true)
		return ok(false)
	})

})