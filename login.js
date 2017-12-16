function login() {
var username=document.getElementById('username').value;
var password=document.getElementById('password').value;
alert(username+" "+password);
if (username==='Solar' && password==='Streak'){
	window.location.href='home.html';
}
