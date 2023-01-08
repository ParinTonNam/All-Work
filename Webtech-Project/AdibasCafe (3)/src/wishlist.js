let label = document.getElementById("label");

let Favoritelist = document.getElementById("wishlist");
let wishlistbasket = JSON.parse(localStorage.getItem("wishlist")) || [];

let wishlistcalculation = () => {
  let favIcon = document.getElementById("favAmount");
  favIcon.innerHTML = wishlistbasket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

wishlistcalculation();

// ขึ้นจำนวนตะกร้า
let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();





let generateWishList = () => {
  if (wishlistbasket.length !== 0) {
    return (Favoritelist.innerHTML = wishlistbasket
      .map((x) => {
        let { id, item } = x;
        // ค้นหาในดาต้า
        let wishlistsearch = shopItemsData.find((y) => y.id === id) || shopItems_coffee.find((y) => y.id === id) 
          || shopItems_tea.find((y) => y.id === id)  || shopItems_soda.find((y) => y.id === id)  
          || shopItems_appetizer.find((y) => y.id === id)  || shopItems_maindish.find((y) => y.id === id)  
           || shopItems_dessert.find((y) => y.id === id) || [];
        // console.log(wishlistsearch.name);
        return `

        
      <div class="cart-item2">
        <img src=${wishlistsearch.img} class="pic3" alt="" />
        <div class="details">
          <div class="title-price-x">
              <h4 class="title-price">
                <p>${wishlistsearch.name}</p>
              
                  <a id="${wishlistsearch.name}" onClick="reply_click(this.id)" href="./product.html" class="buy-btn"><i class="bi bi-search"></i>More Detail</a>
              </h4>
          </div>
          <p>${wishlistsearch.desc}</p>
            <p class="cart-item-price">฿ ${wishlistsearch.price}</p>
            <div id=${id} class="quantity"></div>
         <i onclick="addtowishlist(${id})" class="bi bi-trash-fill"></i>
        </div>
      </div>






      
      `;
      })
      .join(""));
  } else {
    Favoritelist.innerHTML = ``;
    label.innerHTML = `
    <h2>Your Wishlist is Empty. Add some?.</h2>
    <a href="index.html">
      <button class="HomeBtn">Back to home</button>
    </a>
    `;
  }
};

generateWishList();




let addtowishlist = (id) => {
  let selectedItem = id;
  let searchwish = wishlistbasket.find((x) => x.id === selectedItem.id);

  if (searchwish === undefined) {
    wishlistbasket.push({
      id: selectedItem.id,
      item: 1,
    });
  } 
  if (searchwish.item === 0) return;
  else{
    searchwish.item -= 1;
  }
  wishlistbasket = wishlistbasket.filter((x) => x.item !== 0);
  localStorage.setItem("wishlist", JSON.stringify(wishlistbasket));
  wishlistupdate(selectedItem.id);
  generateWishList();
};

let wishlistupdate = (id) => {
  let wishlistsearch = wishlistbasket.find((x) => x.id === id);
  // console.log(search.item);
  wishlistcalculation();
};

