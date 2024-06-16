document.getElementById('search-bar').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      const title = card.querySelector('.card-title').textContent.toLowerCase();
      if (title.includes(query)) {
        card.parentElement.style.display = 'block';
      } else {
        card.parentElement.style.display = 'none';
      }
    });
  });

  // Funcionalidad de agregar al carrito
  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      const productName = this.dataset.name;
      const productPrice = this.dataset.price;
      addToCart(productName, productPrice);
    });
  });

  function addToCart(name, price) {
    const cartItems = document.getElementById('cart-items');
    const newItem = document.createElement('li');
    newItem.textContent = `${name} - €${price}`;
    cartItems.appendChild(newItem);
  }