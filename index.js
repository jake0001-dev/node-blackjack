const shoe = require('./modules/generate_shoe');
const shuffle = require('./modules/shuffle');
const { calculateHandValue, dealerDecision} = require('./modules/dealer_logic');
const {generateCardASCII, combineCardASCII} = require('./modules/ascii');
const chalk = require('chalk');

const shoe1 = shoe();
const shoe2 = shoe();

const shuffled_shoe1 = shuffle(shoe1);
const shuffled_shoe2 = shuffle(shoe2);

let bet = 100;
let mid_hand = true;

const input = require('readline-sync');








const player = {
    name: 'Jake',
    hand: [],
    cash: 1000,
    bet: bet
}

const dealer = {
    name: 'Dealer',
    hand: [],
    cash: 1000,
    bet: bet
}

chalk.blue(`Balance: $${player.cash}`);
const player_bet = input.question('How much would you like to bet? ');
if (player_bet > 1000) {
    console.log('You cannot bet more than you have!');
} else {
    player.bet = parseInt(player_bet);
}



const deal = (shoe) => {
    const card = shoe.pop();
    return card;
}

const hit = (player, shoe) => {
    const card = deal(shoe);
    player.hand.push(card);
}

const deal_initial = (player, dealer, shoe) => {
    hit(player, shoe);
    hit(dealer, shoe);
    hit(player, shoe);
    hit(dealer, shoe);
}






const type_to_symbol = {
    spade: '♠',
    heart: '♥',
    diamond: '♦',
    club: '♣'
}


const play = (player, dealer, shoe) => {
    const plus = chalk.green('[+]');
    const minus = chalk.red('[-]');
    const balance = chalk.blue(`Balance: $${player.cash}`);
    const bet_amount = chalk.blue(`Bet amount: $${player.bet}`);
    const win = chalk.green('[WIN] ');
    const loss = chalk.red('[LOSS] ');
    const player_logo = chalk.blueBright('[PLAYER] ');
    const dealer_logo = chalk.redBright('[DEALER] ');

    console.clear()
    console.log(`${plus} ${balance} ${bet_amount}`);
    console.log('Welcome to Blackjack!');
    mid_hand = true;

    deal_initial(player, dealer, shoe);
    console.log(player_logo)
    console.log(combineCardASCII(player.hand));
    console.log(dealer_logo)
    console.log(generateCardASCII({number: dealer.hand[0].number, type: dealer.hand[0].type} ));

    console.log(`${dealer.name}'s hand: ${dealer.hand[0].number}${type_to_symbol[dealer.hand[0].type]} ?`);

    if (calculateHandValue(player.hand) === 21) {
        console.log(`${win} ${player.name} has blackjack!`);
        player.cash += player.bet;
        mid_hand = false;
    }

    while (mid_hand) {
        const decision = input.question(`${player.name}, would you like to hit or stand? `).toLowerCase();
        if (decision === 'hit') {
            console.clear()
            hit(player, shoe);
            console.log(combineCardASCII(player.hand));
            if (calculateHandValue(player.hand) > 21) {
                console.log(`${loss} ${player.name} busts!`);
                player.cash = player.cash - player.bet;
                console.log(`${minus + '$' + player.bet} | Balance : $ ${player.cash} `);
                mid_hand = false;
            }
        } else if (decision === 'stand') {
            console.clear()
            console.log(`${player.name} stands.`);
            mid_hand = false;
        } else {
            console.log('Invalid input!');
        }
    }

    if (calculateHandValue(player.hand) <= 21) {
        console.log(combineCardASCII(dealer.hand));
        while (dealerDecision(dealer.hand) === 'hit') {
            hit(dealer, shoe);
            console.log(`${dealer.name} hits.`);
            console.log(combineCardASCII(dealer.hand));
        }

        console.log(`${dealer.name} stands.`);
        console.log(`${dealer.name}'s hand: ${calculateHandValue(dealer.hand)}`);

        if (calculateHandValue(dealer.hand) > 21) {
            console.log(`${win} ${dealer.name} busts!`);
            player.cash += player.bet;
        } else {
            if (calculateHandValue(player.hand) > calculateHandValue(dealer.hand)) {
                console.log(`${win} ${player.name} wins!`);
                player.cash += player.bet;
            } else if (calculateHandValue(player.hand) < calculateHandValue(dealer.hand)) {
                console.log(`${loss} ${player.name} loses!`);
                player.cash -= player.bet;
            } else {
                console.log('Push!');
            }
        }
    }

    player.hand = [];
    dealer.hand = [];

    console.log('-----------------------------------')
    console.log(player.cash)
    console.log('-----------------------------------')

    if (player.cash <= 0) {
        console.log(`${player.name} is out of money!`);
        return;
    }

    const play_again = input.question('Would you like to play again? (y/n) ').toLowerCase();
    if (play_again === 'y') {
        balance
        play(player, dealer, shoe);
    } else {
        console.log('Thanks for playing!');
    }
}

play(player, dealer, shuffled_shoe1);