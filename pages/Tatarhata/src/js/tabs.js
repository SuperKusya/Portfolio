window.addEventListener('DOMContentLoaded', function() {
        let numbers = document.querySelectorAll('.number'),
            cards = document.querySelectorAll('.card'),
            listNumbers = document.querySelector('.list-events'),
            clown = document.querySelector('.pepeClown');

        listNumbers.addEventListener('click', function(event) {
            let target = event.target,
                index = Array.prototype.indexOf.call(numbers, target);

            if (target.classList.contains('number')) {
                hideCards();
                showCard(index);
                moveClown(index);
            }
        });

        function hideCards() {
            cards.forEach(function(card) {
                card.classList.add('hide');
                card.classList.remove('show');
            });
        }

        function showCard(index) {
            let card = cards[index];
            
            card.classList.remove('hide');
            card.classList.add('show');
        }

        function moveClown(index) {
            let width = document.body.clientWidth;
            if (width < 640) {
                clown.style.marginTop = 22.5 * index + "%";
            } else {
                clown.style.marginLeft = 22.5 * index + "%";
            }
        }
});