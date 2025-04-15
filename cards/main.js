function loadCards() {
    let hand = [];

    hand.push(pack.getRandom());
    hand.push(pack.getRandom());
    hand.push(pack.getRandom());
    hand.push(pack.getRandom());

    console.log(hand);

    const div = document.getElementById("cards");

    for(const card of hand) {
        const newCard = document.createElement("div");

        newCard.textContent = card;
        newCard.className = "card cardSelect";

        newCard.addEventListener("click", () => {
            const allCards = document.querySelectorAll("#cards .card");
            allCards.forEach(c => {
                if (c !== newCard) c.remove();
                c.className = "card";
            });
        });

        div.appendChild(newCard);
    }
}

Array.prototype.getRandom = function() {
    return this[Math.floor(Math.random() * this.length)];
}