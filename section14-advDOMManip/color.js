var button = document.querySelector("button");
// var isPurple = false;

// button.addEventListener("click", function(){
//     if(isPurple) {
//         document.body.style.background = "#FFFFFF";
//     } else {
//         document.body.style.background = "#8C0E45";
//     }
//     // if white
//     // make it purple
//     // else
//     // make it white
//     isPurple = !isPurple;
// });

button.addEventListener("click", function(){
    document.body.classList.toggle("purple")
    // this will toggle .purple on the body
});