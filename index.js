favFood = [
    "pepperoni pizza",
    "yaki udon",
    "tonkatsu ramen",
    "cheese cake",
    "soup"

]

let parent = document.querySelector("#foodList")

favFood.forEach((food) => {
    newFood = document.createElement("h2");
    newFood.innerText = food;
    parent.appendChild(newFood);
})

