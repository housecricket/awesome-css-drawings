var hair = document.querySelector('.hair');

function change(e){
    e.style.backgroundColor = "#222222";
    console.log(e.querySelector('.hair1'))
    e.querySelector('.hair1').style.borderTop=("20px solid white");
    e.querySelector('.hair2').style.borderTop=("20px solid red");
    e.querySelector('.hair3').style.borderTop=("20px solid white");
    e.querySelector('.hair4').style.borderTop=("20px solid red");
    e.querySelector('.hair5').style.borderTop=("20px solid red");
}
function cancel(e){
    e.style.backgroundColor="#f0f0f0";
    e.querySelector('.hair1').style.borderTop=("20px solid green");
    e.querySelector('.hair2').style.borderTop=("20px solid green");
    e.querySelector('.hair3').style.borderTop=("20px solid green");
    e.querySelector('.hair4').style.borderTop=("20px solid green");
    e.querySelector('.hair5').style.borderTop=("20px solid green");
}