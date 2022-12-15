export class ItemsController {
  
  constructor (currentId = 0) {
    this.items = []; 
    this.currentId = currentId;
  }
    addItem (name,description,url,price){
      const item = {
        id: this.currentId++,
        name: name,
        description: description,
        url: url,
        price: price
      }
      this.items.push(item);

      localStorage.setItem("items", JSON.stringify(this.items));
      }

  
  }

  product1 = addItem('It Makes No Scents','This is our only scent free candle, specifically made for those who are allergic or sensative to fragrances.','https://images.unsplash.com/photo-1602523961358-f9f03dd557db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',14.99);
  product2 = addItem('HELLO WORLD!','Enjoy the earthy pine tree scents.','https://images.unsplash.com/photo-1604249180474-3ebaf8747373?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGVhcnRoeSUyMGNhbmRsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',19.99);
  product3 = addItem('Why Isn\'t This Working? Why Is This Working?','Enjoy the fresh ground coffee scent on one and the crisp champagne scent on the other!','https://images.unsplash.com/photo-1608181831843-e7e72430f993?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHwyNjcxMTY3OXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',29.99);
  product4 = addItem('CryptoBros','Great for gifting to your Crypto obsessed friends or family members! English Ivy scent','https://images.unsplash.com/photo-1524004994188-c256159ae908?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTF8MjMyODM4NzJ8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',14.99);
  product5 = addItem('Git It!','Git It will sure put you in the mood to Get It with its clean cotton scent. Our best seller!','https://images.unsplash.com/photo-1603006905003-be475563bc59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',14.99);
  product6 = addItem('PWD Party Work Debug','This candle will sure to put you in PARTY mood with its Pina Colada scent','https://images.unsplash.com/photo-1607713328148-0e55aa0c0772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNhbmRsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',14.99);
  product7 = addItem('404 ERROR!','This wonderful Eucalyptus scented candle will give you debugging 404 error powers!','https://images.unsplash.com/photo-1532592068623-db1978e40df5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',14.99);
  product8 = addItem('Javachips','This is for the sweet tooth candle lovers, Chocolate Chip Cake Batter yum yum yum','https://images.unsplash.com/photo-1585938517800-6dea260062cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3xNUVhOc2lSaDNFb3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',19.99);


 export function save(name, description, imageUrl){
    const data = { name,  description, imageUrl };

    fetch('http://localhost:8080/item/add', {
    method: 'POST', // or 'PUT'
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
    console.log('Success:', data);
    })
    .catch((error) => {
    console.error('Error:', error);
    });
}