function highlight(element) {
  var cards = document.querySelectorAll('.card');
  cards.forEach(function (card) {
    card.classList.remove('highlighted');
    var radio = card.querySelector('input[type="radio"]');
    if (radio) {
      radio.checked = false;
    }
  });
  element.classList.add('highlighted');
  var radio = element.querySelector('input[type="radio"]');
  if (radio) {
    radio.checked = true;
  }
}
