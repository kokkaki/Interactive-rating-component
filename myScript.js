
let ratings = document.querySelectorAll(".rating");
let select = document.querySelector(".select");
console.log(ratings);

ratings.forEach( ( rating, i) => {
  rating.onclick = function () {
    let current_rating_level = (i + 1);
    select.innerHTML = `You selected ${current_rating_level} out of 5`;

  }
})

function replace() { 
  document.getElementById("mini").style.display="none";
  document.getElementById("text").style.display="block"; 


   };
  


 