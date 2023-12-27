const type_to_symbol = {
    spade: '♠',
    heart: '♥',
    diamond: '♦',
    club: '♣'
}


function generateCardASCII(card) {
    const topBottomBorder = '+--------+';
    const emptyLine = '|        |';
    let middleLine;

    switch (card.number) {
        case '10': // Special case for 10 since it's two characters
            middleLine = `|${card.number} ${type_to_symbol[card.type]}    |`;
            break;
        default:
            middleLine = `|${card.number}${type_to_symbol[card.type]}      |`;
    }

    return [
        topBottomBorder,
        emptyLine,
        middleLine,
        emptyLine,
        topBottomBorder
    ].join('\n');
}




function combineCardASCII(cards) {
    const count = cards.length;

    if (count === 0) {
        return '';
    }

    if (count === 1) {
        return generateCardASCII(cards[0]);
    }

    if (count === 2) {
        const card1 = generateCardASCII(cards[0]).split('\n');
        const card2 = generateCardASCII(cards[1]).split('\n');
        let combined = '';

        for (let i = 0; i < card1.length; i++) {
            combined += card1[i] + '   ' + card2[i] + '\n';
        }

        return combined;
    }

    if (count === 3) {
        const card1 = generateCardASCII(cards[0]).split('\n');
        const card2 = generateCardASCII(cards[1]).split('\n');
        const card3 = generateCardASCII(cards[2]).split('\n');
        let combined = '';

        for (let i = 0; i < card1.length; i++) {
            combined += card1[i] + '   ' + card2[i] + '   ' + card3[i] + '\n';
        }

        return combined;
    }

    if (count === 4) {
        const card1 = generateCardASCII(cards[0]).split('\n');
        const card2 = generateCardASCII(cards[1]).split('\n');
        const card3 = generateCardASCII(cards[2]).split('\n');
        const card4 = generateCardASCII(cards[3]).split('\n');
        let combined = '';

        for (let i = 0; i < card1.length; i++) {
            combined += card1[i] + '   ' + card2[i] + '   ' + card3[i] + '   ' + card4[i] + '\n';
        }

        return combined;
    }

    if (count === 5) {
        const card1 = generateCardASCII(cards[0]).split('\n');
        const card2 = generateCardASCII(cards[1]).split('\n');
        const card3 = generateCardASCII(cards[2]).split('\n');
        const card4 = generateCardASCII(cards[3]).split('\n');
        const card5 = generateCardASCII(cards[4]).split('\n');
        let combined = '';

        for (let i = 0; i < card1.length; i++) {
            combined += card1[i] + '   ' + card2[i] + '   ' + card3[i] + '   ' + card4[i] + '   ' + card5[i] + '\n';
        }

        return combined;
    }
}
module.exports = {
    generateCardASCII,
    combineCardASCII
}