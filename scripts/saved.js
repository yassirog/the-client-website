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
      productName: "Woonhuis de pijp",
      category: "Woonhuis",
      price: "300.000",
      image: "assets/seng.jpeg",
      m4: "30",
      slaapkamers: "2",
    },
    {
      productName: "Villa woerden",
      category: "Villa",
      price: "490.000",
      image: "assets/villa.jpeg",
      m4: "80",
      slaapkamers: "6",
    },
    {
      productName: "Appartement Amsterdam",
      category: "Appartement",
      price: "990.000",
      image: "assets/appa1.jpeg",
      m4: "54",
      slaapkamers: "3",
    },
    {
      productName: "Villa Blaricum",
      category: "Villa",
      price: "2.900.000",
      image: "assets/villa1.jpeg",
      m4: "90",
      slaapkamers: "8",
    },
    {
      productName: "Appartement Heemskerk",
      category: "Appartement",
      price: "129.000",
      image: "assets/appa2.jpeg",
      m4: "63",
      slaapkamers: "3",
    },
    {
      productName: "Appartement Holendrecht",
      category: "Appartement",
      price: "890.000",
      image: "assets/appa3.jpeg",
      m4: "72",
      slaapkamers: "3",
    },
    {
      productName: "APPARTEMENT PURRIE",
      category: "Appartement",
      price: "1.000.000",
      image: "assets/appa5.jpeg",
      m4: "62",
      slaapkamers: "4",
    },
    {
      productName: "woonhuis purra",
      category: "Woonhuis",
      price: "490.000",
      image: "assets/woonhuisje.jpeg",
      m4: "53",
      slaapkamers: "3",
    },
  {
    productName: "woonhuis zwolle",
    category: "Woonhuis",
    price: "129.000",
    image: "assets/woonhuisje2.jpeg",
    m4: "93",
    slaapkamers: "3",
  },
  {
    productName: "Woonhuis breukelen",
    category: "Woonhuis",
    price: "890.000",
    image: "assets/woonhuisje3.jpeg",
    m4: "63",
    slaapkamers: "3",
  },
  {
    productName: "villa kruiskade",
    category: "Villa",
    price: "1.290.000",
    image: "assets/villa4.jpeg",
    m4: "90",
    slaapkamers: "7",
  },
  {
    productName: "APPARTEMENT AMSTERDAM-WEST",
    category: "Appartement",
    price: "890.000",
    image: "assets/appa4.jpeg",
    m4: "62",
    slaapkamers: "3",
  }, {
    productName: "Villa Maastricht",
    category: "Villa",
    price: "3.210.300",
    image: "assets/villa2.jpeg",
    m4: "103",
    slaapkamers: "7",
  },
  {
    productName: "Villa Purmerend",
    category: "Villa",
    price: "891.230",
    image: "assets/villa3.jpeg",
    m4: "101",
    slaapkamers: "6",
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
  let name = document.createElement("p");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  name.style["color"] = "rgb(0, 97, 150)";
  name.style["font-weight"] = "bold";
  container.appendChild(name);
  //price
  let price = document.createElement("i");
  price.innerText = "€" + i.price;
  container.appendChild(price);
  card.appendChild(container);
  document.getElementById("products").appendChild(card);
  //m2 
  let m4 = document.createElement("p");
  m4.innerText = i.m4 + "m²";
  container.appendChild(m4);
  card.appendChild(container);
  document.getElementById("products").appendChild(card);
  //sleeprooms
  let slaapkamers = document.createElement("p");
  slaapkamers.innerText = i.slaapkamers + " slaapkamers";
  container.appendChild(slaapkamers);
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