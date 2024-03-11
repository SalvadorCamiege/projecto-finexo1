let btmobile = document.getElementById('bt-mobile')
       function togllemenu(){
             let nav = document.getElementById('nav')
             nav.classList.toggle('active')
       }

btmobile.addEventListener('click', togllemenu)



let count =1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 2000)


function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}











