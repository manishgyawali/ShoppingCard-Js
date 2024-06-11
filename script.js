let shoppingcard = [
    {
        name:"Shoe",
        Price:"price : "
    },
    {
        name:"Bag",
        Price:"price : "
    },
    {
        name:"Shoe",
        Price:"price : "
    },
    {
        name:"Shoe",
        Price:"price : "
    },
    {
        name:"Shoe",
        Price:"price : "
    }
]
let display = document.getElementById("nameid");

shoppingcard.map((value,index)=>{
    


display.innerHTML += `
<div class="main">
<h1>${value.name}</h1>
<h1>${value.Price}</h1>



</div>`
});