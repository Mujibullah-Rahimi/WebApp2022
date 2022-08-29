// Using ID in html
//const up = document.getElementById("up");
//const down = document.getElementById("down");

const recipeID = document.getElementById("oppskrift");
var amountID = document.getElementById("antall");

// Using class in html
const incrementBtn = document.querySelector(".btn-increment");
const decrementBtn = document.querySelector(".btn-decrement");

// RECIPE
console.log(recipeID);
const recipe = {
  wheat_flour: {label: "hvetemel",amount: 75,unit: "g"},
  wholegrain_flour: {label: "fullkornhvetemel",amount: 30,unit: "g"},
  sugar: {label: "sukker",amount: 0.1,unit: "ts"},
  salt: {label: "salt",amount: 0.1,unit: "ts"},
  yeast: {label: "gjær",amount: 0.05,unit: "pakke(r)"},
  water: {label: "vann",amount: 0.7,unit: "dl"},
  butter: {label: "smør",amount: 10,unit: "g"}
};

function createRecipe() {
    recipeID.innerHTML = null;
    const recipeValues = Object.values(recipe)/*.map(createIngredient).join("");*/;
    for (let i = 0; i < recipeValues.length; i++) {
      const{label,amount} = recipeValues[i];
      recipeID.innerHTML += createIngredient(recipeValues[i]);
      
      /*`<li>${label} : ${Number(amount * amountID.innerHTML).toFixed()}${recipeValues[i].unit}</li>`;*/}  
}

function createIngredient({label,amount,unit}){
    return `<li>${label} : ${Number(amount * amountID.innerHTML).toFixed()}${unit}</li>`;
    
}

function updateAmountId(value){
    const currentAmount = Number(amountID.innerHTML);
    amountID.innerHTML = currentAmount + value;
}

function handleButtonClick(event){
    const buttonId = event.target.id;
    console.log(buttonId);

    switch (buttonId) {
        case "increment":
            updateAmountId(1);
            //console.log("INCREMENT")
            break;
        case "decrement":
            updateAmountId(-1);
            //console.log("DECREMENT")
            break;
        default:
            console.log("ERROR");
        }
        createRecipe();
}
// INCREMENT
incrementBtn.addEventListener("click", /*function (event)*/ handleButtonClick);/* {
  let amountValue = amountID.innerHTML;
  amountID.innerHTML = Number(amountValue) + 1;
  createRecipe();
});*/

// DECREMENT
/*function handleDecrement(event) {
  let amountValue = amountID.innerHTML;
  amountID.innerHTML = Number(amountValue) - 1;
  createRecipe();
}*/

decrementBtn.addEventListener("click", handleButtonClick);



createRecipe();