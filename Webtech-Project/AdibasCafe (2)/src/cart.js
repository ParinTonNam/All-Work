let label = document.getElementById("label");
let ShoppingCart = document.getElementById("shopping-cart");

let basket = JSON.parse(localStorage.getItem("data")) || [];
let choicebasket = JSON.parse(localStorage.getItem("choice")) || [];
let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();

let wishlistbasket = JSON.parse(localStorage.getItem("wishlist")) || [];
let wishlistcalculation = () => {
  let favIcon = document.getElementById("favAmount");
  favIcon.innerHTML = wishlistbasket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

wishlistcalculation();



let generateCartItems = () => {
  if (basket.length !== 0) {
    return (ShoppingCart.innerHTML = basket
      .map((x) => {
        let { id, item, choice1, choice2, choice3 } = x;
        // ค้นหาในดาต้า
        let search = shopItemsData.find((y) => y.id === id) || shopItems_coffee.find((y) => y.id === id)
          || shopItems_tea.find((y) => y.id === id) || shopItems_soda.find((y) => y.id === id)
          || shopItems_appetizer.find((y) => y.id === id) || shopItems_maindish.find((y) => y.id === id)
          || shopItems_dessert.find((y) => y.id === id) || [];
        let choicesearch = choicebasket.find((x) => x.id === search.id) || [];
       
        return `

        
      <div class="cart-item">
        <img class="pic2" src=${search.img} alt="" />
        <div class="details">
          <div class="title-price-x">
              <h4 class="title-price">
                <p>${search.name}</p>
                <p class="cart-item-price">฿ ${search.price}</p>
              </h4>
              <i onclick="removeItem(${id})" class="bi bi-x-lg"></i>
          </div>
          <h4>${search.desc}</h4>
           <a id="${search.name}" onClick="reply_click(this.id)" href="./product.html" class="buy-btn">แก้ไขรายละเอียด</a>
          <h2>รายละเอียด</h2>
            <h3>ประเภท: ${choicesearch.choice1 === undefined ? '-' : choicesearch.choice1} </h3>
            <h3>ระดับ: ${choicesearch.choice2 === undefined ? '-' : choicesearch.choice2} </h3>
            <h3>ท๊อปปิ้ง: ${choicesearch.choice3 === undefined ? '-' : choicesearch.choice3} </h3>
          <div class="buttons">
              <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
              <div id=${id} class="quantity">${item}</div>
              <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
          </div>
          <h3>รวม:฿ ${item * search.price}</h3>
        </div>
      </div>






      
      `;
      })
      .join(""));
  } else {
    ShoppingCart.innerHTML = ``;
    label.innerHTML = `
    <h2>Cart is Empty</h2>
    <a href="index.html">
      <button class="HomeBtn">Back to home</button>
    </a>
    `;
  }
};

generateCartItems();

let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }

  generateCartItems();
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
  generateCartItems();
  localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  // console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calculation();
  TotalAmount();
};

let removeItem = (id) => {
  let selectedItem = id;
  // console.log(selectedItem.id);
  basket = basket.filter((x) => x.id !== selectedItem.id);
  generateCartItems();
  TotalAmount();
  localStorage.setItem("data", JSON.stringify(basket));
  calculation();
};

let clearCart = () => {
  basket = [];
  generateCartItems();
  localStorage.setItem("data", JSON.stringify(basket));
  calculation();
};
// // คิดราคา
let TotalAmount = () => {
  if (basket.length !== 0) {
    let amount = basket
      .map((x) => {
        let { item, id } = x;
        let search = shopItemsData.find((y) => y.id === id) || shopItems_coffee.find((y) => y.id === id)
          || shopItems_tea.find((y) => y.id === id) || shopItems_soda.find((y) => y.id === id)
          || shopItems_appetizer.find((y) => y.id === id) || shopItems_maindish.find((y) => y.id === id)
          || shopItems_dessert.find((y) => y.id === id) || [];

        return item * search.price;
      })
      .reduce((x, y) => x + y, 0);
    // console.log(amount);
    label.innerHTML = `
    <h2 class="billtext">Total Bill : ฿ ${amount}</h2>
    <button class="checkout" onclick="checktest()">Checkout</button>
    <div id="myModal" class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        <p>ชำระเงินเสร็จสิ้น</p>
        <p>ทั้งหมด ฿${amount}</p>
        <img src="images/meme/cat.png" class="pic4">
      </div>
    </div>
    <button onclick="clearCart()" class="removeAll">Clear Cart</button>
    `;
  } else return;
};

function checktest(){
  if (document.getElementById("user").innerHTML != "User"){
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";

    span.onclick = function() {
      modal.style.display = "none";
      clearCart();
    }

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
        clearCart();
      }
    }
  }
  else{
    window.location.href = 'login.html';
  }
}
TotalAmount();