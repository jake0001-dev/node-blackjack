const shuffle = (shoe) => {
    const shuffled_shoe = [];
    const shoe_length = shoe.length;

    for (let i = 0; i < shoe_length; i++) {
        const random_index = Math.floor(Math.random() * shoe.length);
        shuffled_shoe.push(shoe[random_index]);
        shoe.splice(random_index, 1);
    }

    return shuffled_shoe;
}

module.exports = shuffle;
