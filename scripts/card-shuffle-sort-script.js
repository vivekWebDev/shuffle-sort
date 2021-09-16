let cardData = [1,2,3,4,5,6,7,8,9];
let cardHolder = document.getElementById("card-block");

// Add name dynamically
addEventListener("load", ()=>{
    document.getElementById("name").innerHTML = "Vivek Kumar";
    setCard();
})

// Add card list inside ul
function setCard(){
cardHolder.innerHTML = ''
cardData.forEach((cardItem) => {
    cardHolder.innerHTML += '<li card-list=' + cardItem + '>' + cardItem + '</li>'
  })
}

function shuffleCard(){
    cardData = cardData.sort(() => Math.random() - 0.5);
    setCard();
  }

function sortCard(){
    cardData = cardData.sort((a, b) => { return a - b });
    setCard();
}