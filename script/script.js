window.onload = (event) => {
if(!document.cookie.includes("hidden")){
     document.getElementById('hiddenelement').parentElement.style.display='block';
}
        if(typeof jQuery == 'undefined'){
         alert("website reloading");

            window.location.reload;
        }
};

function hide(){
document.getElementById('hiddenelement').parentElement.style.display='none';
const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 60).toUTCString()
  document.cookie = `hidden=true; expires=${expires}; path=/`;
}
function copy(e) {
  var copyText = document.getElementById(e);
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  $('#copied-success').fadeIn(800);
  $('#copied-success').fadeOut(1000);
}