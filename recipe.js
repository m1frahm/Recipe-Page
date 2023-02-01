// // First up, let's create a new list item and store it in a variable.
// var newListItem = document.createElement('li');

// // Now let's update the text content of that list item.
// newListItem.textContent = '1 tsp paprika';

// // And finally, let's add that list item as a child of the ul.
// document.querySelector('ul').appendChild(newListItem);

// //fetch back to myDiv
// const myDiv = document.getElementById("myDiv");
// console.log(myDiv);

// //creating checkbox element
// const checkbox = document.createElement("input")

// //assigning attributes 
// checkbox.type = "checkbox";
// checkbox.name = "name";
// checkbox.value = "value";
// checkbox.id = "id";

// //creating label for checkbox
// var label = document.createElement("label");

// //assocciate lable using for html, links back to line 21
// label.htmlFor ="id";

// //appending
// label.appendChild(
//     document.createTextNode("This creates label for checkbox.")
// );

// //appending the checkbox
// // and label to div
// myDiv.appendChild(checkbox);
// myDiv.appendChild(label);

// //add event listener to label
// label.addEventListener("click",(event)=>{
//     event.target.classList.toggle("checked")
// });


// we are making a new variable to store an ingredientList into an array

const ingredientList = [
    "2 Sweet Potatoes that have been boiled and cut into slices",
    "3 tbsp extra virgin olive oil",
    "1 tsp salt",
    "1 tsp paprika",
    "1 tsp garlic powder",
    "1 tsp black pepper"
]

// we used .getElementbyId to get the UL for ingredientList (id tag on html)
const $ingredientListElement = document.getElementById('ingredients')

// instead of for loop we used forEach to iterate list 
ingredientList.forEach((ingredientListItem) => {
    // making a new li element in order to create li elements to be appended in the future ul 
    const $liElement = document.createElement('li')
    // .textContent allows you to assign IngListitem values to the li element we made above 
    $liElement.textContent = ingredientListItem
    $ingredientListElement.appendChild($liElement)
})
// we get getting all the li elements from html and iterating them in order to preprend input checkbox
const $liElements = Array.from(document.getElementsByTagName('li'));

//creating a checkbox 
function createCheckboxElement() {
  const $checkboxElement = document.createElement('input')
  // by default "type" can be text , but we want it to be a checkbox
  $checkboxElement.type = 'checkbox'
  return $checkboxElement
}

$liElements.forEach(($element) => {
    //storing return value of createCheckboxElement() into $checkboxElement
  const $checkboxElement = createCheckboxElement()
  //we start to add event listener 
  $checkboxElement.addEventListener('change', (event) => {
    if (event.target.checked) {
      $element.classList.add('checked')
    } else {
      $element.classList.remove('checked')
    }
  })
  
  $element.insertBefore($checkboxElement, $element.firstChild)
})