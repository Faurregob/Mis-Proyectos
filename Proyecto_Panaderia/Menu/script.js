document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    const titulo = document.querySelector('.title-container .titulo');
    const tarjetas = document.querySelectorAll('.product-card');
    const cartCount = document.getElementById("cart-count");
    const cartModal = document.getElementById("cart-modal");
    const closeBtn = document.querySelector(".close-btn");
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");
    const checkoutBtn = document.getElementById("checkout-btn");

    let cart = [];  // Array para guardar productos en el carrito

    const nombresCategorias = {
        todos: 'Todos los productos',
        panaderia: 'Panadería',
        bebidas: 'Bebidas',
        postres: 'Postres',
        sandwiches: 'Sandwiches',
        jugos: 'Jugos Naturales'
    };

    titulo.textContent = nombresCategorias.todos; // Título inicial

    // Función para actualizar el carrito (número de productos y el total)
    function updateCart() {
        // Actualizar el número de productos en el carrito
        cartCount.textContent = cart.length;

        // Mostrar los productos en el carrito
        cartItemsContainer.innerHTML = '';  // Limpiar el carrito actual
        let total = 0;

        cart.forEach((product, index) => {
            const productDiv = document.createElement("div");
            productDiv.classList.add("cart-item");
            productDiv.innerHTML = `
                <p><b>Producto:</b> ${product.name} <br><b>Cantidad:</b> ${product.quantity} <br><b>Costo Unitario:</b> $${product.price} <br><b>Valor Total Producto:</b> $${(product.price * product.quantity).toFixed(0).replace(".", ",")}</p>
                <button class="delete-btn" data-index="${index}">Eliminar</button>
            `;
            cartItemsContainer.appendChild(productDiv);
            total += product.price * product.quantity;
        });

        // Mostrar el total a pagar con formato COP (si es el caso)
        totalPriceElement.textContent = "$" + total.toFixed(0).replace(".", ",");
    }

    // Manejo de los filtros de productos
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const categoria = button.getAttribute('data-category');

            // Cambiar texto del título
            titulo.textContent = nombresCategorias[categoria] || 'Menú';

            // Filtrar tarjetas visibles
            productCards.forEach(card => {
                if (categoria === 'todos' || card.classList.contains(categoria)) {
                    card.style.display = 'flex'; // o block
                } else {
                    card.style.display = 'none';
                }
            });
            // Mostrar el chulo verde cuando se aplica el filtro
            filterButtons.forEach(btn => btn.classList.remove('selected'));  // Eliminar el chulo de otros botones
            if (categoria !== 'todos') {
                button.classList.add('selected');  // Agregar el chulo al botón seleccionado
            }
        });
    });

    


    // Manejo de las cantidades de productos y agregar al carrito
    tarjetas.forEach(tarjeta => {
        const contador = tarjeta.querySelector('.contador');
        const btnInc = tarjeta.querySelector('.incrementar');
        const btnDec = tarjeta.querySelector('.decrementar');
        const btnBuy = tarjeta.querySelector('.buy-button');  // El botón de compra
        let valor = 0; // Inicializa la cantidad en 0

        btnInc.addEventListener('click', () => {
            valor++; // Incrementa la cantidad
            contador.textContent = valor; // Muestra la cantidad actualizada en el contador
        });

        btnDec.addEventListener('click', () => {
            if (valor > 0) {
                valor--; // Decrementa la cantidad
                contador.textContent = valor; // Muestra la cantidad actualizada en el contador
            }
        });

        // Función para agregar al carrito
        btnBuy.addEventListener('click', (e) => {
            e.preventDefault();  // Prevenir cualquier acción de enlace predeterminada (en caso de que haya un <a> alrededor del botón)

            const productName = tarjeta.querySelector(".product-name").textContent;
            const productPrice = parseFloat(tarjeta.querySelector(".product-price").textContent.replace("$", "").replace(",", ""));
            
            if (valor > 0) { // Solo agregamos si el valor es mayor que 0
                // Verificar si el producto ya está en el carrito
                let productInCart = cart.find(product => product.name === productName);
                if (productInCart) {
                    // Si el producto ya está en el carrito, solo aumentamos la cantidad
                    productInCart.quantity += valor;
                } else {
                    // Si el producto no está en el carrito, lo agregamos
                    cart.push({
                        name: productName,
                        price: productPrice,
                        quantity: valor
                    });
                }

                // Actualizamos el carrito
                updateCart();

                // Resetear la cantidad del producto después de agregarlo
                valor = 0;
                contador.textContent = valor; // Reinicia el contador de cantidad
            } else {
                alert("Selecciona una cantidad mayor a 0 antes de agregar al carrito.");
            }
        });
    });

    // Función para abrir el modal del carrito
    const cartLink = document.getElementById("carrito-link");
    cartLink.addEventListener("click", () => {
        if (cart.length === 0) {
            alert("No hay productos en el carrito.");
        } else {
            cartModal.style.display = "flex"; // Mostrar el modal
        }
    });

    // Función para cerrar el modal del carrito
    closeBtn.addEventListener("click", () => {
        cartModal.style.display = "none"; // Ocultar el modal
    });

    // Cerrar el modal si se hace clic fuera del contenido
    window.onclick = function(event) {
        if (event.target === cartModal) {
            cartModal.style.display = "none";
        }
    };

    // Función de pago (aquí puedes agregar la lógica de pago real si lo necesitas)
    checkoutBtn.addEventListener("click", () => {
        if (cart.length === 0) {
            alert("No hay productos para pagar.");
        } else {
            alert("Pago realizado exitosamente");
            cart = [];  // Limpiar el carrito después del pago
            updateCart();
            cartModal.style.display = "none";
        }
    });

    // Función para eliminar productos del carrito
    cartItemsContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("delete-btn")) {
            const index = e.target.getAttribute("data-index");
            cart.splice(index, 1);  // Elimina el producto del carrito
            updateCart();  // Actualiza el carrito después de eliminar el producto
        }
    });
});
