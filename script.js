import menuArray from './data.js'


console.log(menuArray)

   function getFeedHtml(){
    let feedHtml= ` `
    menuArray.forEach(menuItem =>{

        feedHtml +=` <div class="menu-items">
             <div class="menu-items-img">
                 <p><span>${menuItem.emoji}</span></p>
             </div>
             <div class="menu-items-txt">
                 <p class="menu-item-name"> ${menuItem.name}</p>
             <p class="menu-item-ingredients"> Butter, Milk, floor</p>
                 <p class="menu-item-price">${menuItem.price}</p>
                 <hr style="border: none; border-top: 2px solid #d1ceceb3; margin: 20px 30px;" />
             </div>

             <div class="add-to-cart-btn"  data-product-name ="${menuItem.id}">
                 <i class="fa-regular fa-plus" data-product-name ="${menuItem.id}"></i>
             </div>
        </div>`

    })
    
       return feedHtml
   }
   render()

   


//    add to cart option click Event
document.addEventListener('click', function(e){
    if (e.target.dataset.productName){
        handleAddToCartBtn(e.target.dataset.productName)
    }
        

    function handleAddToCartBtn(productID) {
        const addToCartData = menuArray.filter((product) =>{
         return product.id == productID
        })[0]
        console.log(addToCartData)


    }
   
})

   function render(){
       document.getElementById('feed').innerHTML = getFeedHtml()
   }
// Ensure the DOM is fully loaded before calling render



   
        

