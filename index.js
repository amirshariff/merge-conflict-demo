favFood = [
    "Lasagna",
    "Beef Pho",
    "pepperoni pizza"
]

let parent = document.querySelector("#foodList")

favFood.forEach((food) => {
    newFood = document.createElement("h2");
    newFood.innerText = food;
    parent.appendChild(newFood);
})

