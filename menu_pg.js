const menuItems = [
    {
      title: "Smashed Avo",
      image: "/Images/smashed-avo.png",
      price: 20,
      id: 0,
      quantity: 1,
    },
    {
      title: "Ying & Yang",
      image: "/Images/ying-yang.png",
      price: 20,
      id: 1,
      quantity: 1,
    },
    {
      title: "Pancakes",
      image: "/Images/pancakes.png",
      price: 20,
      id: 2,
      quantity: 1,
    },
    {
      title: "Huevos Rancheros",
      image: "/Images/huevos-rancheros.png",
      price: 20,
      id: 3,
      quantity: 1,
    },
    {
      title: "Rancheros",
      image: "/Images/rancheros.png",
      price: 20,
      id: 4,
      quantity: 1,
    },
    {
      title: "Veg Burger",
      image: "/Images/burg-veg.png",
      price: 20,
      id: 5,
      quantity: 1,
    },
    {
      title: "Egg Burger",
      image: "/Images/burg-egg.png",
      price: 20,
      id: 6,
      quantity: 1,
    },
    {
      title: "Burrito",
      image: "/Images/burrito.png",
      price: 20,
      id: 7,
      quantity: 1,
    },
  ];
  
  const menuCardContainer = document.querySelector(".menu-card-container");
  
  menuItems.map((menuItem) => {
    const menuCard = document.createElement("div");
    menuCard.classList.add("menu-card");
    const image = document.createElement("img");
  
    image.src = menuItem.image;
    menuCard.appendChild(image);
  
    const title = document.createElement("p");
    title.textContent = menuItem.title;
    menuCard.appendChild(title);
  
    menuCard.addEventListener("click", () => {
      let selectedMenus = [];
  
      const storedMenu = localStorage.getItem("selectedMenu")
  
      if(storedMenu) {
        selectedMenus = JSON.parse(storedMenu)
      }
  
      selectedMenus.push(menuItem)
  
      localStorage.setItem("selectedMenu", JSON.stringify(selectedMenus));
    });
  
    menuCardContainer.appendChild(menuCard);
  });

const homeHandle = () => {
    window.location.href="landing_pg.html";
};

const cartHandle = () => {
    window.location.href="cart_pg.html";
};

const handleMenu = () => {
  window.location.href = "menu_pg.html"
};

if(window.location.pathname === '/menu_pg.html'){
    const cartIcon = document.querySelector('.menu-img')
    cartIcon.style.backgroundColor = "#F1D5BB"
}