class Pizzas {
  constructor(id, nombre, categoria, precio) {
    this.id = id;
    this.nombre = nombre;
    this.categoria = categoria;
    this.precio = precio;
  }
}

const carrito = [];

const todasLasPizzas = [];
todasLasPizzas.push(new Pizzas(1, "Top Cheddar", "clasica", 1500));
todasLasPizzas.push(new Pizzas(2, "Papa Francis", "clasica", 2300));
todasLasPizzas.push(new Pizzas(3, "Sour Cream", "clasica", 1800));
todasLasPizzas.push(new Pizzas(4, "Extrema", "clasica", 1700));
todasLasPizzas.push(new Pizzas(5, "Clasic Chicken", "clasica", 1750));
todasLasPizzas.push(new Pizzas(6, "Picante Dulce", "clasica", 1800));
todasLasPizzas.push(new Pizzas(7, "Pepperoni Heaven", "clasica", 1900));
todasLasPizzas.push(new Pizzas(8, "Polaca", "clasica", 1600));
todasLasPizzas.push(new Pizzas(9, "Siciliana", "clasica", 1650));
todasLasPizzas.push(new Pizzas(10, "Tropical Spicy", "clasica", 1500));
todasLasPizzas.push(new Pizzas(11, "Alfredo's", "clasica", 1750));
todasLasPizzas.push(new Pizzas(12, "Al Pesto", "clasica", 1600));
todasLasPizzas.push(new Pizzas(13, "Al Capone", "gluten Free", 2000));
todasLasPizzas.push(new Pizzas(14, "Crazy Chicken", "gluten Free", 2100));
todasLasPizzas.push(new Pizzas(15, "Caribe Magic", "gluten Free", 2200));
todasLasPizzas.push(new Pizzas(16, "Caesar", "gluten Free", 2100));
todasLasPizzas.push(new Pizzas(17, "Chicken Shroom", "gluten Free", 2300));
todasLasPizzas.push(new Pizzas(18, "Bomba", "gluten Free", 1600));
todasLasPizzas.push(new Pizzas(19, "Caprese", "veggie", 1700));
todasLasPizzas.push(new Pizzas(20, "Combo Veggie", "veggie", 1850));
todasLasPizzas.push(new Pizzas(21, "De los Dioses", "veggie", 1950));
todasLasPizzas.push(new Pizzas(22, "Napolitana", "veggie", 1700));
todasLasPizzas.push(new Pizzas(23, "Mix Veggie", "veggie", 1600));
todasLasPizzas.push(new Pizzas(24, "Carne Veggie", "veggie", 1950));

let seleccion = prompt(
  `Hola, desea comprar pizzas? por favor escriba si o no`
).toUpperCase();

while (seleccion != "SI" && seleccion != "NO") {
  alert("Por favor ingrese si o no.");
  seleccion = prompt(
    `Desea comprar pizzas, por favor escriba si o no`
  ).toUpperCase();
}

if (seleccion == "SI") {
  alert(
    "A continuación se mostrarán un menú con nuestras pizzas, escoja las pizzas y tome nota de su número de índice"
  );
  let mostrar = todasLasPizzas.map(
    (
      pizza
    ) => `${pizza.id} ${pizza.nombre} (${pizza.categoria}): ${pizza.precio}$
        `
  );
  alert(`        -${mostrar.join("-")}`);
} else if (seleccion === "NO") {
  alert("Gracias por su visita!");
}

while (seleccion != "NO") {
  let pizzaN = parseInt(
    prompt(`Agrega una pizza a tu carrito escribiendo su numero`)
  );

  pizzaN--;
  let pizzaCantidad = todasLasPizzas.length - 1;

  if (Number.isInteger(pizzaN)) {
    if (pizzaN < 0 || pizzaN > pizzaCantidad) {
      alert("Por favor ingrese un numero que se encuentre en la lista");
    } else {
      let id = pizzaN;
      carrito.push(todasLasPizzas[id]);
      alert(`Su pizza ha sido agregada al carrito`);
      seleccion = prompt(`Desea seguir comprando?`).toUpperCase();

      while (seleccion != "SI" && seleccion != "NO") {
        alert("Por favor ingrese si o no.");
        seleccion = prompt(
          `Desea seguir comprando? escriba si o no`
        ).toUpperCase();
      }
    }
  } else {
    alert("Por favor ingrese un valor numerico.");
  }
  if (seleccion === "NO") {
    const total = carrito.reduce((acc, el) => acc + el.precio, 0);
    alert("Gracias por su compra");
    carrito.forEach(
      (carritoFin) => `${carritoFin.nombre}: ${carritoFin.precio}$`
    );
    let mostrarCarrito = carrito.map(
      (pizzaFin) => `
            ${pizzaFin.nombre}: ${pizzaFin.precio}$
            `
    );
    alert(`Su pedido es:
        ${mostrarCarrito.join("")}
        -.  Total a pagar: ${total}$  .-
        `);
  }
}
