// Product Class: Defines the structure of our individual products
class Product {
  //   title = "DEFAULT";
  //   image;
  //   price;
  //   description;

  constructor(title, image, price, desc) {
    this.title = title;
    this.image = image;
    this.price = price;
    this.description = desc;
  }
}

// ProductItem Class: Defines the structure of every item passed in our product class
class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    console.log("Adding Product To Cart...");
    console.log(this.product);
  }

  // How 'this' product will be rendered in the HTML
  render() {
    const prodEl = document.createElement("li");
    prodEl.className = "product-item";
    prodEl.innerHTML = `
                <div>
                    <img src="${this.product.image}" alt="${this.product.title}">
                    <div class="product-item__content">
                        <h2>${this.product.title}</h2>
                        <h3>\$${this.product.price}</h3>
                        <p>${this.product.description}<p>
                        <button>Add to Cart</button>
                    </div>
                <div>
                `;
    // Giving functionality to the created button in our rendered HTML
    const addCartBtn = prodEl.querySelector("button");
    addCartBtn.addEventListener("click", this.addToCart.bind(this));
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product(
      "Pillow",
      "https://4.bp.blogspot.com/-IPa6eJW6sJA/WKUwLwNpRHI/AAAAAAABXNQ/DR1n3bvx5asEn0_06ziOZb6vlwDSrkPFwCLcB/s1600/DIY%2Bpillows%2B%25281%2529.JPG",
      19.99,
      "A nice and soft pillow."
    ),
    new Product(
      "Bicycle",
      "https://marketplacer.imgix.net/2H/gYHNsdmlHjCb8dTFaHC3S6Lno.jpg?auto=format&fm=pjpg&fit=max&q=90&itemprop=image&alt=The%20Ultimate%20Guide%20to%20Buying%20a%20Mountain%20Bike&w=1600&h=1000&s=524c00a2131d2d60d18c9ceca1415e79",
      179.99,
      "Sport Bicycle for Mountains."
    ),
    new Product(
      "Soccer Ball",
      "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F05%2Fadidas-football-uefa-champions-league-final-match-ball-peace-01.jpg?q=90&w=1400&cbr=1&fit=max",
      59.99,
      "Soccer Ball of UEFA Champions League."
    ),
    new Product(
      "PS5",
      "https://assets-prd.ignimgs.com/2022/03/29/ps5-digital-stock-at-amazon-this-week-1648560918205.png?width=1920",
      499.99,
      "PS5."
    ),
    new Product(
      "Xbox Series X",
      "https://cdn.vox-cdn.com/thumbor/OF9Gmy6V08T6nSzXdm9j2yaflDk=/0x0:3000x2000/2070x1164/filters:focal(1260x760:1740x1240):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/67741604/jbareham_201020_ecl1040_xbox_lead_0001.0.jpg",
      499.99,
      "Xbox Series X"
    ),
    new Product(
      "Nintendo Switch",
      "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.25/c_scale,w_1100/ncom/en_US/switch/site-design-update/oled-model-promo",
      400.00,
      "Nintendo Switch"
    ),
  ];

  constructor() {}

  render() {
    const renderPlace = document.getElementById("items");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      // Creating a new ProductItem class for every product passed in our for loop
      const productItem = new ProductItem(prod);
      // Creating a const to save the rendered HTML created for this product and appending it to the 'ul' (ProdList)
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    renderPlace.append(prodList);
  }
}

const productList = new ProductList();
productList.render();
