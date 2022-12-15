const itemsController = new ItemsController(0);

function addItemCard(item){
    const itemHTML = '<div class="card" style="width: 18rem;">\n' + '    <img src="'+item.itemUrl +'" class="card-img-top" alt="product image">\n' + '    <div class="card-body">\n' + '        <h5 class="card-title">' + item.itemName + '</h5>\n' + '        <p class="card-text">' + item.itemPrice + '<br>' + item.itemDescription+'</p>\n' + '        <a href="#" class="btn btn-primary">Add to cart</a>\n' + '    </div>\n' + '</div>\n' + '<br/>';
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}



/* <div class="card" style="width: 18rem;">
      <img
        src="https://images.unsplash.com/photo-1560159167-02c11d28e671?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTh8VVVydk1LNzJmLXd8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text">
        <h5>BothEnds</h5> <br>$14.99<br> Front End and Back End we call it BothEnds here! Relax and chill with this
        Fresh Linen scent</p>
        <button>Add To Cart</button>
      </div>
    </div>
*/