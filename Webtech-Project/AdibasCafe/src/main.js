// let shop = document.getElementById("shop");
let coffee = document.getElementById("coffee");
let tea = document.getElementById("tea");
let soda = document.getElementById("soda");
let appetizer = document.getElementById("appetizer");
let maindish = document.getElementById("maindish");
let dessert = document.getElementById("dessert");
let search = document.getElementById("searchbar");

let basket = JSON.parse(localStorage.getItem("data")) || [];
let wishlistbasket = JSON.parse(localStorage.getItem("wishlist")) || [];


let generateCoffee = () => {
  return (coffee.innerHTML = shopItems_coffee.map((x) => {
    let { id, name, price, subname, img } = x;
    let search = basket.find((x) => x.id === id) || [];
    let searchwish = wishlistbasket.find((x) => x.id === id) || [];

      return `
      <div  class="box">
      
      <!--img box-->
      <div class="slide-img" alt="1">
        <img src=${img}>
        
        <!--overlayer-->
        <div class="overlay">
          <!--buy-btn--> 
          <a id="${name}" onClick="reply_click(this.id)" href="./product.html" class="buy-btn">Buy Now</a>
          
        </div>
      </div>
      <!--detail-box-->
      <div class="detail-box">
      
        <!--type-->
        <div class="type">
          <a  id="${name}" onClick="reply_click(this.id)" href="./product.html" >${name}</a>
          <span>${subname}</span>
        </div>
        
        <!--price-->
        <div id=${id} class="quantity"></div>
        <a  id="${name}" onClick="reply_click(this.id)" href="./product.html" class="price">฿${price} </a>
        
      </div>
         <label class="switch">
       <i onclick="addtowishlist(${id})" class="bi bi-heart-fill"" style="cursor: pointer; color:${searchwish.color === undefined ? '' : searchwish.color};"></i>
      
      </label>
    </div>
    `;
  })
    .join(""));
};

let generateTea = () => {
  return (tea.innerHTML = shopItems_tea.map((x) => {
    let { id, name, price, subname, img } = x;
    let search = basket.find((x) => x.id === id) || [];
    let searchwish = wishlistbasket.find((x) => x.id === id) || [];

    return `
      <div  class="box">

      <!--img box-->
      <div class="slide-img" alt="1">
        <img src=${img}>
        
        <!--overlayer-->
        <div class="overlay">
          <!--buy-btn--> 
          <a id="${name}" onClick="reply_click(this.id)" href="./product.html" class="buy-btn">Buy Now</a>
        </div>
      </div>
      <!--detail-box-->
      <div class="detail-box">
      
        <!--type-->
        <div class="type">
          <a  id="${name}" onClick="reply_click(this.id)" href="./product.html" >${name}</a>
          <span>${subname}</span>
        </div>
        <!--price-->
        <div id=${id} class="quantity"></div>
        <a  id="${name}" onClick="reply_click(this.id)" href="./product.html" class="price">฿${price} </a>
        
          
      </div>
      <label class="switch">
       <i onclick="addtowishlist(${id})" class="bi bi-heart-fill"" style="cursor: pointer; color:${searchwish.color === undefined ? '' : searchwish.color};"></i>
      
      </label>
    </div>
    `;
  })
    .join(""));
};

let generateSoda = () => {
  return (soda.innerHTML = shopItems_soda.map((x) => {
    let { id, name, price, subname, img } = x;
    let search = basket.find((x) => x.id === id) || [];
    let searchwish = wishlistbasket.find((x) => x.id === id) || [];

    return `
      
      <div  class="box">
      
      <!--img box-->
      <div class="slide-img" alt="1">
        <img src=${img}>
        
        <!--overlayer-->
        <div class="overlay">
          <!--buy-btn--> 
          <a id="${name}" onClick="reply_click(this.id)" href="./product.html" class="buy-btn">Buy Now</a>
        </div>
      </div>
      <!--detail-box-->
      <div class="detail-box">
      
        <!--type-->
        <div class="type">
          <a id="${name}" onClick="reply_click(this.id)" href="./product.html">${name}</a>
          
          <span>${subname}</span>
        </div>
        
        <!--price-->
        <div id=${id} class="quantity"></div>
        <a id="${name}" onClick="reply_click(this.id)" href="./product.html" class="price">฿${price} </a>
      </div>
      <label class="switch">
       <i onclick="addtowishlist(${id})" class="bi bi-heart-fill"" style="cursor: pointer; color:${searchwish.color === undefined ? '' : searchwish.color};"></i>
      </label>
    </div>
    `;
  })
    .join(""));
};

let generateAppetizer = () => {
  return (appetizer.innerHTML = shopItems_appetizer.map((x) => {
    let { id, name, price, subname, img } = x;
    let search = basket.find((x) => x.id === id) || [];
    let searchwish = wishlistbasket.find((x) => x.id === id) || [];

    return `
      
      <div  class="box">
      
      <!--img box-->
      <div class="slide-img" alt="1">
        <img src=${img}>
        
        <!--overlayer-->
        <div class="overlay">
          <!--buy-btn--> 
          <a id="${name}" onClick="reply_click(this.id)" href="./product.html" class="buy-btn">Buy Now</a>
        </div>
      </div>
      <!--detail-box-->
      <div class="detail-box">
      
        <!--type-->
        <div class="type">
          <a id="${name}" onClick="reply_click(this.id)" href="./product.html" >${name}</a>
          <span>${subname}</span>
        </div>
        
        <!--price-->
        <div id=${id} class="quantity"></div>
        <a id="${name}" onClick="reply_click(this.id)" href="./product.html" class="price">฿${price} </a>
        
      </div>
      <label class="switch">
       <i onclick="addtowishlist(${id})" class="bi bi-heart-fill"" style="cursor: pointer; color:${searchwish.color === undefined ? '' : searchwish.color};"></i>
      
      </label>
    </div>
    `;
  })
    .join(""));
};

let generateMaindish = () => {
  return (maindish.innerHTML = shopItems_maindish.map((x) => {
    let { id, name, price, subname, img } = x;
    let search = basket.find((x) => x.id === id) || [];
    let searchwish = wishlistbasket.find((x) => x.id === id) || [];

    return `
      
      <div  class="box">
      <!--img box-->
      <div class="slide-img" alt="1">
        <img src=${img}>
        
        <!--overlayer-->
        <div class="overlay">
          <!--buy-btn--> 
          <a id="${name}" onClick="reply_click(this.id)" href="./product.html" class="buy-btn">Buy Now</a>
        </div>
      </div>
      <!--detail-box-->
      <div class="detail-box">

        <!--type-->
        <div class="type">
          <a id="${name}" onClick="reply_click(this.id)" href="./product.html">${name}</a>
          <span>${subname}</span>
        </div>
        
        <!--price-->
        <div id=${id} class="quantity"></div>
        <a id="${name}" onClick="reply_click(this.id)" href="./product.html" class="price">฿${price} </a>
        
      </div>
      <label class="switch">
       <i onclick="addtowishlist(${id})" class="bi bi-heart-fill"" style="cursor: pointer; color:${searchwish.color === undefined ? '' : searchwish.color};"></i>
      </label>
    </div>
    `;
  })
    .join(""));
};



let generateDessert = () => {
  return (dessert.innerHTML = shopItems_dessert.map((x) => {
    let { id, name, price, subname, img } = x;
    let search = basket.find((x) => x.id === id) || [];
    let searchwish = wishlistbasket.find((x) => x.id === id) || [];

    return `
      
      <div  class="box">
      
      <!--img box-->
      <div class="slide-img" alt="1">
        <img src=${img}>
        
        <!--overlayer-->
        <div class="overlay">
          <!--buy-btn--> 
          <a id="${name}" onClick="reply_click(this.id)" href="./product.html" class="buy-btn">Buy Now</a>
        </div>
      </div>
      <!--detail-box-->
      <div class="detail-box">
      
        <!--type-->
        <div class="type">
          <a id="${name}" onClick="reply_click(this.id)" href="./product.html">${name}</a>
          <span>${subname}</span>
        </div>
        
        <!--price-->
        <div id=${id} class="quantity"></div>
        <a id="${name}" onClick="reply_click(this.id)" href="./product.html" class="price">฿${price} </a>
        
      </div>
      <label class="switch">
       <i onclick="addtowishlist(${id})" class="bi bi-heart-fill"" style="color:${searchwish.color === undefined ? '' : searchwish.color};">          </i>
      
      </label>
    </div>
    `;
  })
    .join(""));
};

// generateShop();
generateCoffee();
generateTea();
generateSoda();
generateAppetizer();
generateMaindish();
generateDessert();

function showall(check) {
  if (check == 'coff') {
    // document.getElementById("shop").style.display = "none";
    document.getElementById("coffee").style.display = "grid";
    document.getElementById("tea").style.display = "none";
    document.getElementById("soda").style.display = "none";
    document.getElementById("appetizer").style.display = "none";
    document.getElementById("maindish").style.display = "none";
    document.getElementById("dessert").style.display = "none";
  }
  else if (check == 'tEa') {
    document.getElementById("shop").style.display = "none";
    document.getElementById("coffee").style.display = "none";
    document.getElementById("tea").style.display = "grid";
    document.getElementById("soda").style.display = "none";
    document.getElementById("appetizer").style.display = "none";
    document.getElementById("maindish").style.display = "none";
    document.getElementById("dessert").style.display = "none";
  }
  else if (check == 'sOda') {
    document.getElementById("shop").style.display = "none";
    document.getElementById("coffee").style.display = "none";
    document.getElementById("tea").style.display = "none";
    document.getElementById("soda").style.display = "grid";
    document.getElementById("appetizer").style.display = "none";
    document.getElementById("maindish").style.display = "none";
    document.getElementById("dessert").style.display = "none";
  }
  else if (check == 'aPpetizer') {
    document.getElementById("shop").style.display = "none";
    document.getElementById("coffee").style.display = "none";
    document.getElementById("tea").style.display = "none";
    document.getElementById("soda").style.display = "none";
    document.getElementById("appetizer").style.display = "grid";
    document.getElementById("maindish").style.display = "none";
    document.getElementById("dessert").style.display = "none";
  }
  else if (check == 'mAindish') {
    document.getElementById("shop").style.display = "none";
    document.getElementById("coffee").style.display = "none";
    document.getElementById("tea").style.display = "none";
    document.getElementById("soda").style.display = "none";
    document.getElementById("appetizer").style.display = "none";
    document.getElementById("maindish").style.display = "grid";
    document.getElementById("dessert").style.display = "none";
  }
  else if (check == 'dEssert') {
    document.getElementById("shop").style.display = "none";
    document.getElementById("coffee").style.display = "none";
    document.getElementById("tea").style.display = "none";
    document.getElementById("soda").style.display = "none";
    document.getElementById("appetizer").style.display = "none";
    document.getElementById("maindish").style.display = "none";
    document.getElementById("dessert").style.display = "grid";
  }
  else if (check == 'all') {
    document.getElementById("shop").style.display = "grid";
    document.getElementById("coffee").style.display = "grid";
    document.getElementById("tea").style.display = "grid";
    document.getElementById("soda").style.display = "grid";
    document.getElementById("appetizer").style.display = "grid";
    document.getElementById("maindish").style.display = "grid";
    document.getElementById("dessert").style.display = "grid";
  }
}

// กะต้า
let increment = (id) => {
  let selectedItem = id;

  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {

  }


  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
};
let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(selectedItem.id);
  basket = basket.filter((x) => x.item !== 0);
  // console.log(basket);
  localStorage.setItem("data", JSON.stringify(basket));
};
let update = (id) => {
  let search = basket.find((x) => x.id === id);
  // console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();












// wishlist



let addtowishlist = (id) => {
  let selectedItem = id;
  let searchwish = wishlistbasket.find((x) => x.id === selectedItem.id);

  if (searchwish === undefined) {
    wishlistbasket.push({
      id: selectedItem.id,
      item: 1,
      color: 'red',
    });
  }
  else if (searchwish.item === 0) return;
  else {
    searchwish.item -= 1;
    console.log(searchwish);
  }

  wishlistbasket = wishlistbasket.filter((x) => x.item !== 0);
  localStorage.setItem("wishlist", JSON.stringify(wishlistbasket));
  wishlistupdate(selectedItem.id);
  // generateShop();
  generateCoffee();
  generateTea();
  generateSoda();
  generateAppetizer();
  generateMaindish();
  generateDessert();

};


let wishlistupdate = (id) => {
  let wishlistsearch = wishlistbasket.find((x) => x.id === id);
  // console.log(search.item);
  wishlistcalculation();
};

let wishlistcalculation = () => {
  let favIcon = document.getElementById("favAmount");
  favIcon.innerHTML = wishlistbasket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

wishlistcalculation();

const wish = document.getElementById('wish');

