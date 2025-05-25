const cards = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H'];
let flippedCards = [];
let matchedCards = [];

// Shuffle the cards (Fisher-Yates algorithm)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Initialize the game
function initGame() {
    const gameContainer = document.getElementById('game');
    const shuffledCards = shuffle([...cards]);
    
    gameContainer.innerHTML = '';
    flippedCards = [];
    matchedCards = [];
    
    shuffledCards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.value = card;
        cardElement.dataset.index = index;
        cardElement.addEventListener('click', flipCard);
        gameContainer.appendChild(cardElement);
    });
}

// Flip a card
function flipCard() {
    if (flippedCards.length < 2 && !flippedCards.includes(this) && !matchedCards.includes(this)) {
        this.classList.add('flipped');
        this.textContent = this.dataset.value;
        flippedCards.push(this);
        
        if (flippedCards.length === 2) {
            setTimeout(checkMatch, 500);
        }
    }
}

// Check if two flipped cards match
function checkMatch() {
    const [card1, card2] = flippedCards;
    
    if (card1.dat