

// document.querySelector("button").addEventListener("click", handleClick)

// function handleClick(){
//     alert("i got clicked")
// }


for(i=0; i<document.querySelectorAll(".drum").length; i++){

document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    alert("I got clicked")
})
}
