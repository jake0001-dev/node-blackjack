function getCardValue(card) {
    if (['J', 'Q', 'K'].includes(card.number)) {
        return 10;
    } else if (card.number === 'A') {
        return 11; // We'll handle the special case of Ace later
    } else {
        return parseInt(card.number, 10);
    }
}

function calculateHandValue(cards) {
    let total = 0;
    let acesCount = 0;

    for (const card of cards) {
        total += getCardValue(card);
        if (card.number === 'A') {
            acesCount += 1;
        }
    }

    while (total > 21 && acesCount > 0) {
        total -= 10; // Convert an Ace from 11 to 1
        acesCount -= 1;
    }

    return total;
}

function dealerDecision(cards) {
    const total = calculateHandValue(cards);

    if (total < 17) {
        return 'hit';
    } else {
        return 'stand';
    }
}



module.exports = {
    calculateHandValue,
    dealerDecision
}
