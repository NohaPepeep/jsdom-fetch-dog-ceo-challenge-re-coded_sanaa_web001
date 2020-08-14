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
  for (const property in arr) {
    let text =document.createTextNode(property);
    let li=document.createElement("li");
    //challenge 3
     ul.appendChild(li).onclick=function(){
      li.style.color="blue"
    }
    li.appendChild(text);
  }
}
document.addEventListener("DOMContentLoaded", function(){
        fetch(breedUrl)
  .then(resp => resp.json())
  .then(json =>breed(json.message));
});
var sel = document.getElementById('breed-dropdown');
if($0===)

