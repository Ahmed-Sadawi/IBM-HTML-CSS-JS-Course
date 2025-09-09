// PROBLEM 1,2
var arr = [
   {item: "laptop", quantity: 5, price:35000},
   {item:"cell phone", quantity:3, price:15000},
   {item: "screen", quantity:2, price: 5000},
];

function calculateTotalSales(arr){
    let result = 0;
   for(let i=0; i<arr.length; i++){
    result+= arr[i].quantity*arr[i].price;
   }
   return result;
} 
console.log(calculateTotalSales(arr));

function generateReceipt(arr)
{
    let grandTotal = 0;
    for(let i=0; i<arr.length; i++)
    {
        console.log("The item is:", arr[i].item);
        console.log("The amount:", arr[i].quantity);
        console.log("the price is:", arr[i].price);
        console.log("the total price for this item is", arr[i].quantity*arr[i].price);
        grandTotal+=arr[i].quantity*arr[i].price;
    }
    console.log("The grand total is:" ,grandTotal);
}
generateReceipt(arr);

// PROBLEM 3 
var pass = ["abc12345", ",,anvffholfl", "12345678", "123456789123456789123456789"];
    
function valid(pass){
    const regex = /^[a-zA-Z0-9]{8,20}$/;
    for(let i=0; i<pass.length; i++){
        if(regex.test(pass[i])) console.log(pass[i],"is valid");
        else console.log(pass[i],"is not valid");
    }
}
valid(pass); 

// PROBLEM 5

const products = [
    { product: "Laptop", stock: 5 },
    { product: "Headphones", stock: 0 },
    { product: "Smartphone", stock: 3 }
];

function checkStockLevels(products){
    for(let i =0; i<products.length; i++){
        if(products[i].stock>0) console.log(`${products[i].product} is in stock`)
        else console.log(`${products[i].product} is out of stock`)
    }
}


checkStockLevels(products);

