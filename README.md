# jokenpo-game

Jokenpo é um jogo simples que tem como objetivo vencer o adversário escolhendo um objeto, que pode ser _pedra_, _papel_ ou _tesoura_, sendo que:
- Pedra vence tesoura
- Tesoura vence papel
- Papel vence pedra
    
A aplicação vai funcionar por linha de comando, onde o usuário passa uma das opções e espera o resultado, será ele contra a máquina, que escolhe de maneira randômica um objeto.
Será possível jogar uma unica partida, ou definir quantas partidas serão realizadas para definir um vencedor.

---
## Preparando o ambiente

Inicie o projeto com o comando __npm install__.

## Jogando

Gere um buildo do projeto com __npm run build__ e pronto! O jogo estará pronto para ser executado via terminal.

Listar comandos disponíveis
```
npm run serve --help
```

Jogar uma partida escolhendo pedra (stone)
```
npm run serve -pc stone
```