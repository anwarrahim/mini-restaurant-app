import menuArray from './data.js'


console.log(menuArray)

let cartDataObjList =[]

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


   //    add to cart option click Event
document.addEventListener('click', function(e){
    if (e.target.dataset.productName){
        handleAddToCartBtn(e.target.dataset.productName)
    }
    if (e.target.dataset.removeProduct){



        handleRemoveToCartBtn(e.target.dataset.removeProduct)
    }
       
})


function handleAddToCartBtn(productID) {
    const addToCartData = menuArray.filter((product) => {
        return product.id == productID
    })[0]
    cartDataObjList.unshift(addToCartData)

    renderCart()
}


const renderCart = () =>{
    let addToCartFeed = ` `
   cartDataObjList.map(cartDataObj =>{
            
    addToCartFeed += `<div class="order-items-list">
            <ul class="order-item-list-content">
                <li>
                    <ul class="left-side-list">
                        <li class=".menu-item-name">${cartDataObj.name}</li>
                        <li class="item-remove-btn" data-remove-product = ${cartDataObj.id}>remove</li>
                    </ul>
                </li>
                <li class=".menu-item-price">$${cartDataObj.price}</li>
            </ul>
           </div>`
    }).reduce()


    document.getElementById('your-order-section').innerHTML = addToCartFeed
  }




// function of remove button
const handleRemoveToCartBtn = removeItem =>{
     cartDataObjList = cartDataObjList.filter(product =>{
        return product.id != removeItem

    })
    
    renderCart()
   
}



   function render(){
       document.getElementById('feed').innerHTML = getFeedHtml()
   }
   
render()
   
        

