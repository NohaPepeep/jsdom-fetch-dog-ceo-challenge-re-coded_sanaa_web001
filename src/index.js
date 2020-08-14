//challenge1
console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function images(arr){
  let imog= document.getElementById("dog-image-container");
  for(let i=0;i<arr.length;i++){
    let newImg=document.createElement("img");
    imog.appendChild(newImg).setAttribute("src",arr[i]);
  }
}
fetch(imgUrl)
 .then(resp => resp.json())
 .then(json => images(json.message));
  
//challenge 2
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
function breed(arr){
 let ul= document.getElementById("dog-breeds"); 
 let sel = document.getElementById('breed-dropdown');
  if(sel.value==="a"){
      forArr(arr,ul)
  }
  else if(sel.value==="b"){
      forArr(arr,ul)
  }
    //challenge 3
   
}
document.addEventListener("DOMContentLoaded", function(){
        fetch(breedUrl)
  .then(resp => resp.json())
  .then(json =>breed(json.message));
});

function selOption(select){

}

function forArr(arr,ul){
  for (const property in arr) {
    let text =document.createTextNode(property);
    let li=document.createElement("li");
    li.appendChild(text);
     ul.appendChild(li).onclick=function(){
      li.style.color="blue";
}}}