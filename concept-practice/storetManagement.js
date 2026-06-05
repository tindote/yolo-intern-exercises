/**
 * Pass by Value:
 * Primitive values are copied when passed to a function.
 *
 * Objects and arrays are also passed by value,
 * but the copied value is a reference to the object.
 * Therefore mutating the object affects the original object,
 * while reassigning the parameter does not.
 */

//Class product, its not product in database, its product to push into cart
class Product{
    constructor(productId, productName, price, quantity){
        this.productId = productId;
        this.productName = productName;
        this.price = price;
        this.quantity = quantity;
    }
}

class Cart{
    constructor(cartId, products = []){
        this.cartId = cartId;
        this.products = products;
    }

    /**
     * Function to add a product to cart
     * 1. loop through products, find product with same id as id need to add
     * 2. if product found, add quantity 
     * 3. if product not found, push new product to array 
     * @param {Product} productAdd 
     */
    addProduct(productAdd){
        let isExisted = false;
        for(const product of this.products){
            if(product.productId === productAdd.productId){
                product.quantity += productAdd.quantity; 
                isExisted = true;
                break;
            }
        }

        if(isExisted === false){
            this.products.push(productAdd);
        }
    }

    /**
     * Function to remove product by productId
     * 1. loop through products, find product with same id as id of product need to be removed
     * @param {integer} productId 
     */
    removeProduct(productId){
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].productId === productId) {
                this.products.splice(i, 1);
                break;
            }
        }
    }

    /**
     * Function to calculate total price of all product in cart
     * @returns total price
     */
    calculateTotal(){
        let total = 0;
        for(const product of this.products){
            total += (product.quantity * product.price);
        }
        return total;
    }

    /**
     * Function to apply discount on total price
     * @param {number} percent 
     * @returns 
     */
    applyDiscountOnTotal(percent){
        return (this.calculateTotal() * (100 - percent)) / 100;
    }

    /**
     * Function to clone this cart, the cart that is cloned is difference from result, 
     * but product in products is still the same because they have same reference
    */
    shallowClone(){
        return new Cart(this.cartId, [...this.products]);
    }

    /**
     * Function to clone this cart, the cart that is cloned is difference from result
    */
    deepClone(){
        let cloneProducts = []; 
        for(const product of this.products){
            cloneProducts.push(
                new Product(
                    product.productId,
                    product.productName,
                    product.price,
                    product.quantity
                )
            );
        }

        return new Cart(this.cartId, cloneProducts);
    }


}