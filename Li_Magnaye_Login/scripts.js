function validateForm() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

    if (username === "" && password === "") {
      document.getElementById("error-message").innerHTML = "Please enter username and password";
      console.log = "ERROR == ENTER USERNAME AND PASSWORD"
      return false;
    } else if (username === "") {
      document.getElementById("error-message").innerHTML = "Please enter username";
      console.log = "ERROR == ENTER USERNAME"
    } else if (password === "") {
        document.getElementById("error-message").innerHTML = "Please enter password";
        console.log = "ERROR == ENTER PASSWORD"
    }
}

document.getElementById("log-in").addEventListener("click", function(){
 window.location = "../2nd QTR Project/index.html"
})

document.getElementById("forgot").addEventListener("click", function() {
    document.getElementById("hint").innerText = "The password is a fruit and a color"
})

