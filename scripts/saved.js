//Responsive button werkend maken
const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});


// niet hierboven aan zitten

let products = {
  data: [
    {
      productName: "Woonhuis",
      category: "Woonhuis",
      price: "30",
      image: "assets/seng.jpeg",
    },
    {
      productName: "Villa woerden",
      category: "Villa",
      price: "49",
      image: "assets/villa.jpeg",
    },
    {
      productName: "Appartement Amsterdam",
      category: "Appartement",
      price: "99",
      image: "assets/appa1.jpeg",
    },
    {
      productName: "Villa Blaricum",
      category: "Villa",
      price: "29",
      image: "assets/villa1.jpeg",
    },
    {
      productName: "Appartement Heemskerk",
      category: "Appartement",
      price: "129",
      image: "assets/appa2.jpeg",
    },
    {
      productName: "Appartement Holendrecht",
      category: "Appartement",
      price: "89",
      image: "assets/appa3.jpeg",
    },
    {
      productName: "",
      category: "Appartement",
      price: "189",
      image: "",
    },
    {
      productName: "",
      category: "Woonhuis",
      price: "49",
      image: "",
    },
  {
    productName: "",
    category: "Woonhuis",
    price: "129",
    image: "",
  },
  {
    productName: "",
    category: "Woonhuis",
    price: "89",
    image: "",
  },
  {
    productName: "",
    category: "Villa",
    price: "129",
    image: "",
  },
  {
    productName: "",
    category: "Appartement",
    price: "89",
    image: "",
  }, {
    productName: "Villa Maastricht",
    category: "Villa",
    price: "129",
    image: "assets/villa2.jpeg",
  },
  {
    productName: "Villa Purmerend",
    category: "Villa",
    price: "89",
    image: "assets/villa3.jpeg",
  },
  ],
};
for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h3");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //price
  let price = document.createElement("h4");
  price.innerText = "$" + i.price;
  container.appendChild(price);
  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}
//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "Alles") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}
//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");
  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});
//Initially display all products
window.onload = () => {
  filterProduct("Alles");
};