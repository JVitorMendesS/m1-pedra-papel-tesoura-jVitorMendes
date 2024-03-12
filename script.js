function playRockPaperScissor(player1, player2) {
    // Possibilidades onde o jogador 1 vence.
    if (player1 == "Pedra" && player2 == "Tesoura") {
        return 'Jogador 1 venceu!';
    } else if (player1 == "Papel" && player2 == "Pedra") {
        return 'Jogador 1 venceu!';
    } else if (player1 == "Tesoura" && player2 == "Papel") {
        return 'Jogador 1 venceu!';
    }

    // Possibilidades onde o jogador 2 vence.
    if (player1 == "Pedra" && player2 == "Papel") {
        return 'Jogador 2 venceu!';
    } else if (player1 == "Papel" && player2 == "Tesoura") {
        return 'Jogador 2 venceu!';
    } else if (player1 == "Tesoura" && player2 == "Pedra") {
        return 'Jogador 2 venceu!';
    }

    // Possibilidades de empate.
    if (player1 == player2) {
        return 'Empate!';
    }
}