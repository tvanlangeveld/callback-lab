////////////////////////
////// CALCULATOR //////
////////////////////////

const add = function(num1, num2){
  return num1 + num2
}

function subtract(num1, num2){
  return num1 - num2
}

function multiply(num1, num2){
  return num1 * num2
}

function divide(num1, num2){
  return num1 / num2
}

function calculator(num1, num2, callback){
  return callback(num1, num2)
}


const addResult = calculator(4, 6, add)
const subResult = calculator(12352, 4953, subtract)

console.log(addResult)
console.log(subResult)




///////////////////////
////// PET STORE //////
///////////////////////

const dogProducts = [
    {
      name: 'leash',
      colors: ['red', 'blue', 'green'],
      category: 1,
      inventory: 30,
      basePrice: 13.99, 
      displayPrice: 13.99
    }, 
    {
      name: 'chew toy',
      colors: ['brown'],
      category: 2,
      inventory: 120,
      basePrice: 6.00, 
      displayPrice: 6.00
    }, 
    {
      name: 'rope',
      colors: ['blue & green', 'red & yellow'],
      category: 2,
      inventory: 75,
      basePrice: 4.99, 
      displayPrice: 4.99
    }
]

const catProducts = [
  {
    name: 'mouse toy', 
    colors: ['pink', 'grey', 'black'], 
    category: 2, 
    inventory: 125, 
    basePrice: 2.50, 
    displayPrice: 2.50
  },
  {
    name: 'cat sweater',
    colors: ['black'],
    category: 1,
    inventory: 15,
    basePrice: 10.00, 
    displayPrice: 10.00
  }, 
  {
    name: 'straching post',
    colors: ['tan'],
    category: 2,
    inventory: 40,
    basePrice: 22.99, 
    displayPrice: 22.99
  }
]

// CODE HERE



function applyPercentDiscount(product, discount){
  product.displayPrice = product.basePrice * (1 - discount);
}

function applyFlatRateDiscount(product, discount){
  product.displayPrice = product.basePrice - discount;
}


function applyDiscount(arr, callback, discount){
  for(let i = 0; i < arr.length; i++){
    callback(arr[i], discount)
  }
}


// applyDiscount(catProducts, applyFlatRateDiscount, 2)

// // console.log(catProducts)



function applyDiscountByCategory(arr, callback, category, discount){
  for(let i = 0; i < arr.length; i++){
    if(arr[i].category === category){
    callback(arr[i], discount)
    }
  } 
}

// applyDiscountByCategory(catProducts, applyFlatRateDiscount, 2, 2)

// console.log(catProducts)


function applyDiscountByInvent(amount, arr, callback, discount){
  for(let i = 0; i < arr.length; i++){
    if(arr[i].inventory < amount){
      callback(arr[i], discount)
    }
  }
}

// applyDiscountByInvent(50, dogProducts, applyPercentDiscount, .50)

// console.log(dogProducts)

////////////////////////
////// SANDWICHES //////
////////////////////////

// CODE HERE

function makeSandwich(bread) {
  return (ingredients) => {
    let order = `You ordered a ${bread} bread sanwich with `

    for(let i = 0; i < ingredients.length; i++){
      if(i === ingredients.length -1 && i !== 0){
        order += `and ${ingredients[i]}.`
      } else if(ingredients.length === 1){
        order += `${ingredients[i]}.`
      } else {
        order += `${ingredients[i]}, `
      }
    }
    return order

  }
}

const makeYummySandwich = makeSandwich('white')

console.log(makeYummySandwich(['bacon', 'lettuce', 'avocado']))

const makeIdiotSandwich = makeSandwich('hands')

console.log(makeIdiotSandwich(['idiot']))

