const products = [
  {
    name: "Nike Dunk",
    price: 199,
    stars: 4,
    reviews: 250,
    seller: "Nike",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a3e7dead-1ad2-4c40-996d-93ebc9df0fca/dunk-low-retro-zapatillas-dd36JB.png",
  },
  {
    name: "Air Jordan",
    price: 149,
    stars: 5,
    reviews: 150,
    seller: "Nike",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/rru7jxwadwrxkhploqf1/air-jordan-1-mid-se-zapatillas-gVZT9D.png",
  },
  {
    name: "Nike Go",
    price: 129,
    stars: 3,
    reviews: 50,
    seller: "Nike Vip Seller",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0e71e52d-be87-4397-aeb7-1d528a8f6513/go-flyease-zapatillas-faciles-de-poner-y-quitar-n8CfzV.png",
  },
  {
    name: "Nike Huarache",
    price: 97,
    stars: 4,
    reviews: 175,
    seller: "Nike",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a414cb3e-e04b-49f4-bff3-2552f490273b/air-huarache-runner-zapatillas-LVXCRQ.png",
  },
  {
    name: "Vans Range",
    price: 97,
    stars: 4,
    reviews: 185,
    seller: "Vans",
    image:
      "https://www.forumsport.com/medias/medias-1000797410-00-P-X-20220105163003-500Wx500H.jpg?context=bWFzdGVyfGltYWdlc3wyOTM4MXxpbWFnZS9qcGVnfGFXMWhaMlZ6TDJobVlTOW9Nak12TVRBMU1qUTFNREV4TkRjMk56Z3VhbkJufGNiZmVjOTVmMmY0MDg4ZmJhZmExYmIxMmJhZmE1OGNiMjE3MTgwNjFmNWExOTQxZjVmNDRkOWJiYWM2YmJhN2M",
  },
  {
    name: "Vans Filmore",
    price: 60,
    stars: 2,
    reviews: 285,
    seller: "Vans",
    image:
      "https://www.forumsport.com/medias/500Wx500H-medias-1000895466-00-P-X-20221214121428.jpg?context=bWFzdGVyfGltYWdlc3wzMjg1NHxpbWFnZS9qcGVnfGFEazBMMmhoTnk4eE1URXhNemswTWpRNE1qazNOQzgxTURCWGVEVXdNRWhmYldWa2FXRnpYekV3TURBNE9UVTBOalpmTURCZlVGOVlMVEl3TWpJeE1qRTBNVEl4TkRJNExtcHdad3xkNmExZTBkNTY1ZmVkNmQ3NGQ4MzQ1NjZhYTc1ZDc3MmRhYjA3YWEzMmEwN2RkODZmMmJlYTI3ODRlNGUwYzY0",
  },
  {
    name: "Vans Ward",
    price: 48,
    stars: 2,
    reviews: 85,
    seller: "Vans",
    image:
      "https://www.forumsport.com/medias/medias-1000553541-00-P-X-20190823101904-500Wx500H.jpg?context=bWFzdGVyfGltYWdlc3wyMjA2MHxpbWFnZS9qcGVnfGFXMWhaMlZ6TDJoaFpTOW9NRGd2T1RFNE1ESTVNalUzT1RNMU9DNXFjR2N8ZTc4MGU5YWU2YWFmYzJlODY1ZjAwZWMwYzdmNzM1MjBiYmE4NDU0MmFmZTU2YTdhM2NmZjViNjAzOGIxOWJkYg",
  },
  {
    name: "Adidas Samba",
    price: 80,
    stars: 1,
    reviews: 85,
    seller: "Adidas",
    image:
      "https://www.forumsport.com/medias/medias-1000518943-00-P-X-20211209154412-500Wx500H.jpg?context=bWFzdGVyfGltYWdlc3wzNjAwMnxpbWFnZS9qcGVnfGFXMWhaMlZ6TDJoaVpTOW9Oell2TVRBME5qRXhNemMzT1RjeE5UQXVhbkJufGQ0ZmE5MjJkNzJhZGMxZDk0N2Y3Mzc3N2IwYmUyNTQ1OTkzZTc2ZmM2ZDc3OTAzODFkOGJkNzU5ZGQ1NTY5ZmE",
  },
  {
    name: "Adidas vs Pace",
    price: 40,
    stars: 4,
    reviews: 485,
    seller: "Adidas",
    image:
      "https://www.forumsport.com/medias/500Wx500H-medias-1000893183-00-P-X-20221129161411.jpg?context=bWFzdGVyfGltYWdlc3wyNzYyOXxpbWFnZS9qcGVnfGFEUmtMMmc1TXk4eE1UQTNNelkwTXprd05UQTFOQzgxTURCWGVEVXdNRWhmYldWa2FXRnpYekV3TURBNE9UTXhPRE5mTURCZlVGOVlMVEl3TWpJeE1USTVNVFl4TkRFeExtcHdad3w4NjBhODllZTFlNzA5MDE3ZDA5MjJmYzYwYWJlODA3OGE5MGI5ZDQ4NjVlYjNjM2UxOGIzZGQyNmIwMjc3OGZj",
  },
  {
    name: "Adidas Daily",
    price: 49,
    stars: 4,
    reviews: 15,
    seller: "Adidas",
    image:
      "https://www.forumsport.com/medias/500Wx500H-medias-1000843279-00-P-X-20221129161412.jpg?context=bWFzdGVyfGltYWdlc3wzMzAzN3xpbWFnZS9qcGVnfGFESTFMMmc0WXk4eE1UQTNNelF3T1RZeE16ZzFOQzgxTURCWGVEVXdNRWhmYldWa2FXRnpYekV3TURBNE5ETXlOemxmTURCZlVGOVlMVEl3TWpJeE1USTVNVFl4TkRFeUxtcHdad3wxN2NjY2JkNTJhNGI5NDIyNWI4N2M4Njc0MDZhOWI1MTRjZGZlNTczZjI2ODJmZDI0M2VmYzk5YmI4MmE5ODE0",
  },
];

const filtersSection = document.querySelector(".filters");
const productsSection = document.querySelector(".products");
const sellerFilter = document.getElementById("sellerFilter");
const priceFilter = document.getElementById("priceFilter");

initializeFilters();
generateProductCards(products)

function generateProductCards(productsToDisplay) {
  productsSection.innerHTML = "";

  productsToDisplay.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product");
    productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: ${product.price} €</p>
            <p>Stars: ${product.stars}</p>
            <p>Reviews: ${product.reviews}</p>
        `;
    productsSection.appendChild(productCard);
  });
}

function initializeFilters() {
  const option = document.createElement("option");
  option.value = "Filter by Seller";
  option.textContent = "Filter by Seller";
  sellerFilter.appendChild(option);
  const uniqueSellers = [...new Set(products.map((product) => product.seller))];
  uniqueSellers.forEach((seller) => {
    const option = document.createElement("option");
    option.value = seller;
    option.textContent = seller;
    sellerFilter.appendChild(option);
  });
}

let filteredProducts = [];

function filterProducts() {
  const selectedSeller = sellerFilter.value;
  const enteredPrice = parseFloat(priceFilter.value);

  filteredProducts = products.filter((product) => {
    const sellerMatch = !selectedSeller || product.seller === selectedSeller;
    const priceMatch = !enteredPrice || product.price <= enteredPrice;
    return sellerMatch && priceMatch;
  });

  generateProductCards(filteredProducts);

  const noResultsMessage = document.getElementById("noResultsMessage");
  noResultsMessage.style.display = filteredProducts.length === 0 ? "block" : "none";
}

function clearFilters() {
  sellerFilter.value = "";
  priceFilter.value = "";
  generateProductCards(products);
  const noResultsMessage = document.getElementById("noResultsMessage");
  noResultsMessage.style.display = "none";
}