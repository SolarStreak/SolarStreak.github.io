function myFunction() {
    var user, pass;

    
    user = document.getElementById("username").value;
    pass = document.getElementById("password").value;

    alert("hi");
    if (user==="Solar" && pass ==="Streak") {
        window.location.href='home.html';
    }
    
}
