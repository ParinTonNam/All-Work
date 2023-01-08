let shop = document.getElementById("productcon");
let whereisproduct = JSON.parse(localStorage.getItem("productid")) || [];

let key = localStorage.getItem("productid");
let basket = JSON.parse(localStorage.getItem("data")) || [];
let wishlistbasket = JSON.parse(localStorage.getItem("wishlist")) || [];
let choicebasket = JSON.parse(localStorage.getItem("choice")) || [];



let generateShopDetail = () => {
  // ถ้าตะกร้าไม่ว่าง
  if (whereisproduct.length !== 0) {
    return (shop.innerHTML = whereisproduct.map((x) => {
      let { name } = x;
      // หาชื่อให้ตรงกัน "key" ไปหา ใน "data.js"
     
      let search = shopItemsData.find((y) => y.name === name) || shopItems_coffee.find((y) => y.name === name)
        || shopItems_tea.find((y) => y.name === name) || shopItems_soda.find((y) => y.name === name)
        || shopItems_appetizer.find((y) => y.name === name) || shopItems_maindish.find((y) => y.name === name)
        || shopItems_dessert.find((y) => y.name === name) || [];
          // หาตะกร้า  "basket" "search(ตัวแปรข้างบน)"
      let basketsearch = basket.find((x) => x.id === search.id) || [];
       let searchwish = wishlistbasket.find((x) => x.id === search.id) || [];
      // console.log(basketsearch);
      // console.log(search);
       function looptype(num) {
        if (search.type[num] === undefined){
          return `<i class="bi bi-slash-circle-fill"></i>`;
        }
        if (num == search.type.length - 1) {
          return `<label class="switch"><input onclick="addchoice1(${search.id},this.id)" type="radio" name="type" style="display:none" id="`+ search.type[num] + `"><span class="slider">` + search.type[num] +         `</span></input></label>`;
        }
        else if (num < search.type.length) {
          return `<label class="switch"><input onclick="addchoice1(${search.id},this.id)" type="radio" name="type" style="display:none" id="`+ search.type[num] + `"><span class="slider">` + search.type[num] +         `</span></input></label>` + looptype(num + 1);
        }
      }

       function loopsweet(num) {
         if (search.sweet[num] === undefined){
          return `<i class="bi bi-slash-circle-fill "></i>`;
        }
        if (num == search.sweet.length - 1) {
          return `<label class="switch"><input onclick="addchoice2(${search.id},this.id)" type="radio" name="sweet" style="display:none" id="`+ search.sweet[num] + `"><span class="slider">` + search.sweet[num] +         `</span></input></label>`;
        }
        else if (num < search.sweet.length) {
          return `<label class="switch"><input  onclick="addchoice2(${search.id},this.id)"type="radio" name="sweet" style="display:none" id="`+ search.sweet[num] + `"><span class="slider">` + search.sweet[num] +         `</span></input></label>` + loopsweet(num + 1);
        }
      }

      function looptopping(num) {
        if (search.topping[num] === undefined){
          return `<i class="bi bi-slash-circle-fill"></i>`;
        }
        if (num == search.topping.length - 1) {
          return `<label class="switch"><input onclick="addchoice3(${search.id},this.id)" type="checkbox" style="display:none" id="`+ search.topping[num] + `"><span class="slider">` + search.topping[num] +         `</span></input></label>`;
        }
        else if (num < search.topping.length) {
          return `<label class="switch"><input onclick="addchoice3(${search.id},this.id)" type="checkbox"  style="display:none" id="`+ search.topping[num] + `"><span class="slider">` + search.topping[num] +         `</span></input></label>` + looptopping(num + 1);
        }
      }
      // let runnertype =  search.topping.map((i)=>{
      //   `<input type="checkbox"  style="display:none"id="hot"><span class="slider"> ${search.type[i]}</span></input>
      //  </label>`});
      //        console.log(runnertype);

      return `
      <img src="${search.img}" class="pic"/>
      <div class="infoproduct">
        <h1>${search.name}</h1>
        <h1>฿${search.price}</h1>
        <h4>รายละเอียดสินค้า</h4>


      <p>${search.desc}</p>
      <p>ประเภท</p>
      `  
        + looptype(0) +
      `
      <p>ระดับ</p>
      `
        + loopsweet(0) +
      `
      <p>ท็อปปิ้ง</p>
      `
      + looptopping(0) +
      `
      <br>
      <br>
      
      <div class="buttons">
        <i onclick="decrement(${search.id})" class="bi bi-patch-minus"></i>
      <div id=${search.id} class="quantity">${basketsearch.item === undefined ? 0 : basketsearch.item}</div>
        <i onclick="increment(${search.id})" class="bi bi-patch-plus" ></i><br><br>
       <i onclick="addtowishlist(${search.id})" class="bi bi-heart-fill" style="color:${searchwish.color === undefined ? '' :     searchwish.color};">    </i>
      </div>
    <a class="buy-btn" href="./cart.html"><i class="bi bi-cart2">AddToCart</i></a>
   </div>
    `;
    }));
  }
  else {

    shop.innerHTML = `
    <h2>Cart is Empty</h2>
    <a href="index.html">
      <button class="HomeBtn">Back to home</button>
    </a>
    `;
  }
};
generateShopDetail();



let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
      choice1: "-",
      choice2: "-",
      choice3: "-",
    });
  } else {
    search.item += 1;
  }

  // console.log(basket);
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
    // console.log(searchwish);
  }

  wishlistbasket = wishlistbasket.filter((x) => x.item !== 0);
  localStorage.setItem("wishlist", JSON.stringify(wishlistbasket));
  wishlistupdate(selectedItem.id);
  generateShopDetail();

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


// let addchoice1 = (id) => {
//   let selectedItem = id;
//   let search = basket.find((x) => x.id === selectedItem.id);

//   // if (search === undefined) {
//     basket.push({
//       choice1: "jojo",

//     });
//   // }
//   update(selectedItem.id);
//   localStorage.setItem("data", JSON.stringify(basket));
// };



let addchoice1 = (id,clicked_id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
      choicebasket.push({
      id: selectedItem.id,
      item: 1,
      choice1: clicked_id,
      choice2: "-",
      choice3: "-",
    });
  }

  else {
    // return;
    search.choice1 = clicked_id;
    console.log(search);
  }

  wishlistbasket = wishlistbasket.filter((x) => x.item !== 0);
  localStorage.setItem("choice", JSON.stringify(choicebasket));
  update(selectedItem.id);
  generateShopDetail();

};
let addchoice2 = (id,clicked_id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
     choicebasket.push({
      id: selectedItem.id,
      item: 1,
      choice1: "-",
      choice2: clicked_id,
      choice3: "-",
       });
  }

  else {
    // return;
    search.choice2 = clicked_id;
    console.log(search);
  }

  wishlistbasket = wishlistbasket.filter((x) => x.item !== 0);
  localStorage.setItem("choice", JSON.stringify(choicebasket));
  update(selectedItem.id);
  generateShopDetail();
  

};
let addchoice3 = (id,clicked_id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
     choicebasket.push({
      id: selectedItem.id,
      item: 1,
      choice1: "-",
      choice2: "-",
      choice3: clicked_id,
       });
  }

  else {
    // return;
    search.choice3 = clicked_id;
    console.log(search);
  }

  wishlistbasket = wishlistbasket.filter((x) => x.item !== 0);
  localStorage.setItem("choice", JSON.stringify(choicebasket));
  update(selectedItem.id);
  generateShopDetail();
  

};


