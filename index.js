// getting Element by its id - count
// document.getElementById("count").innerText=5;

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count in the HTML


// getElementById is a func hooked to document obj
let countEl = document.getElementById("count-el") // this count-el is called pass in argument means we are giving some data to the func to work with
// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")

// log is a function hooked to console obj
console.log(countEl)


let count = 0

// increment is a function
function increment() {
    count += 1
    countEl.textContent = count
    console.log(countEl)
}



function save() {
    let countStr = count + " - "
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // saveEl.innerText += countStr 
    saveEl.textContent += countStr
    // Google:
    // innerText alternative mdn
    // textContent returns every element in the node. In contrast, innerText is aware of styling and won't return the text of "hidden" elements.
    countEl.textContent = 0
    count = 0
}




// What did I learn in this project
// script tag
// variables
// numbers
// strings
// console.log
// functions 
// DOM
// getElementById
// innerText
// textContent