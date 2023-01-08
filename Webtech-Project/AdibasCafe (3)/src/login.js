
function login() {
  var userID = document.getElementById("username").value;
  localStorage.setItem("id", userID);
  localStorage.setItem("log", "Logout");
}
function logout() {
  localStorage.setItem("id", "User");
  localStorage.setItem("log", "Login");
}