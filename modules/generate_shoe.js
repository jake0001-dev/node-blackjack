const gen = () => {
    const card_type = ['spade', 'heart', 'diamond', 'club'];
    const card_number = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10','J', 'Q', 'K']
    const shoe = [];

    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < card_type.length; j++) {
            for (let k = 0; k < card_number.length; k++) {
                shoe.push({
                    type: card_type[j],
                    number: card_number[k]
                })
            }
        }
    }

    return shoe;
}

module.exports = gen;