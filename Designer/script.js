
var x=0,z=0;
/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function dpdowntoggle(y,a) {
if(a==0){
    if(x==0){
    x=1;
    setTimeout(function(){
    y.style.transform="scale(1)";},10);
}
else if(x==1){
	x=0;
    y.style.transform="scale(0.2)";
}
}
else if(a==1){
    setTimeout(function(){
        y.style.transform="scale(0.2)";},150);
    x=0;
}

}

function contacttoggle(w,b) {
    if(b==0){
    if(z==0){
        z=1;
        setTimeout(function(){
        w.style.transform="scale(1)";},10);
    }
    else if(z==1){
        z=0;
        w.style.transform="scale(0.2)";
    }
}
    else if(b==1){
        setTimeout(function(){
        w.style.transform="scale(0.2)";},150);
        z=0;
    }
        
}

function show_pass(p) {
    if (p.type === "password") {
      p.type = "text";
    } 
    else {
      p.type = "password";
    }
  }


