var inputUsername = document.getElementById('username')
var inputPass = document.getElementById('password')
function redirect(){
    var user = inputUsername.value;
    var pass = inputPass.value;
    if(user=="quan" && pass=="12345")
    {
        window.location="https://wuaan0903.github.io/tinchihau/";
    }
    else alert("Tai khoan khong ton tai")
}