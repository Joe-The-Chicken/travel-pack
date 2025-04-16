function loadCards() {
    let hand = [];

    hand.push(pack.getRandom(4));
    hand = hand.flat(Infinity);

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

Array.prototype.getRandom = function(n) {
    let list = [...this];

    for (let i = list.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [list[i], list[j]] = [list[j], list[i]];
    }

    return list.slice(0,n);
}

function reload() {
    const button = document.getElementById("reload");
    
    button.classList.add("spin-animation");

    setTimeout(() => {
        button.classList.remove("spin-animation");
        location.reload();
    }, 1000);
}

function home() {
    window.location.href = "index.html";
}