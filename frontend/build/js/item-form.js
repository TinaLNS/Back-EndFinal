import { ItemsController, save } from "./itemsController";
// Initialize a new ItemsController with currentId set to 0
const itemsController = new ItemsController();


// Add an 'onsubmit' event listener
newItemForm.addEventListener('submit', (event) => {
    // Prevent default action
    event.preventDefault();
    // Select the New Item Form
    const newItemForm = document.querySelector('#newItemForm');
// Select the inputs
  const newItemName = document.querySelector('#newItemName');
  const newItemDescription = document.querySelector('#newItemDescription');
  const newItemUrl = document.querySelector('#newItemUrl');
  const newItemPrice = document.querySelector('#newItemPrice');

    // Get the values of the inputs
    const name = newItemName.value;
    const description = newItemDescription.value;
    const url = newItemUrl.value;
    const price = newItemPrice.value;  

    console.log(name, description, url, price)
    // Add the item to the ItemsController
    let temp = itemsController.addItem(name, description, url, price);

    addItemCard(temp)
save(name, description, url, price)
    // Clear the form
    newItemName.value = '';
    newItemDescription.value = '';
});

function addItemCard(item){
    const itemHTML = '<div class="card" style="width: 18rem;">\n' + '    <img src="'+item.itemUrl +'" class="card-img-top" alt="product image">\n' + '    <div class="card-body">\n' + '        <h5 class="card-title">' + item.itemName + '</h5>\n' + '        <p class="card-text">' + item.itemPrice + '<br>' + item.itemDescription+'</p>\n' + '        <a href="#" class="btn btn-primary">Add to cart</a>\n' + '    </div>\n' + '</div>\n' + '<br/>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}