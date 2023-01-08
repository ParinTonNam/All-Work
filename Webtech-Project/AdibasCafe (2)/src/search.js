const searchBar = document.querySelector(".search-input");
const inputBox = searchBar.querySelector("input");
const suggBox = searchBar.querySelector(".auto-box");

inputBox.onkeyup = (e) => {
  let userData = e.target.value;
  let emtryArray = [];
  if (userData) {
    emtryArray = shopItemsDataAll.filter((data) => {
      return data.name.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
    });
    emtryArray = emtryArray.map((data) => {
      return data = '<li><a class="searching"id="'+data.name+'" onClick="reply_click(this.id,this.value)" href="./product.html"><img class="searchpic" src="'+data.img+'" width="50" height="50">' + data.name + '</a></li>';
    });
    console.log(emtryArray);
    searchBar.classList.add("active");
    showSuggestions(emtryArray);
    let allList = suggBox.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++) {
      allList[i].setAttribute("onclick", "select(this)")
    }
  } else {
    searchBar.classList.remove("active");
  }
}

function select(element) {
  let selectUserData = element.textContent;
  inputBox.value = selectUserData;
  searchBar.classList.remove("active");
}

function showSuggestions(list) {
  let listData;
  if (!list.length) {
    userValue = inputBox.value;
    listData = '<li>' + userValue + '</li>';
  } else {
    listData = list.join('');
  }
  suggBox.innerHTML = listData;
}






// const searchBar = document.querySelector(".search-input");
// const inputBox = searchBar.querySelector("input");
// const suggBox = searchBar.querySelector(".auto-box");

// inputBox.onkeyup = (e) => {
//   let userData = e.target.value;
//   let emtryArray = [];
//   if (userData) {
//     emtryArray = suggestions.filter((data) => {
//       return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
//     });
//     emtryArray = emtryArray.map((data) => {
//       return data = '<li><a href="./product.html">' + data + '</a></li>';
//     });
//     console.log(emtryArray);
//     searchBar.classList.add("active");
//     showSuggestions(emtryArray);
//     let allList = suggBox.querySelectorAll("li");
//     for (let i = 0; i < allList.length; i++) {
//       allList[i].setAttribute("onclick", "select(this)")
//     }
//   } else {
//     searchBar.classList.remove("active");
//   }
// }

// function select(element) {
//   let selectUserData = element.textContent;
//   inputBox.value = selectUserData;
//   searchBar.classList.remove("active");
// }

// function showSuggestions(list) {
//   let listData;
//   if (!list.length) {
//     userValue = inputBox.value;
//     listData = '<li>' + userValue + '</li>';
//   } else {
//     listData = list.join('');
//   }
//   suggBox.innerHTML = listData;
// }