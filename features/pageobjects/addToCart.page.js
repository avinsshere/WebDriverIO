
const Page = require('./page');
const expectChai = require('chai').expect

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AddToCartPage extends Page {
    /**
     * define selectors using getter methods
     */
    get men() {
        return $('#ui-id-5');
    }

    get tops() {
        return $('#ui-id-17');
    }

    get sweatShirt() {
        return $('#ui-id-20');
    }

    get listOfSweatShirt() {
        return $$('.product-item')
    }

    get nameOfProduct() {
        return $('.product-item-link')
    }

    get size() {
        return $("div[aria-label='M']")
    }

    get color() {
        return $('.color')
    }

    get addTo() {
        return $("button[title='Add to Cart']")
    }

    get shoppingCart(){
        return $('.showcart')
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    //click on create an account
    async navigateToProductPage() {
        await this.men.moveTo();
        await this.tops.moveTo();
        await this.sweatShirt.click();

    }

    async searchProduct(product) {
        await $("//a[contains(text(),'" + product + "')]").click();
    }
    async addToCart(size, colour, quantity) {
        await $('#option-label-size-143').isDisplayed();
        //    await browser.pause(4000); 
        await $("//span[@id='option-label-size-143']/following-sibling::div/div[contains(text(),'" + size + "')]").click();
        await $("//span[@id='option-label-color-93']/following-sibling:: div/div").click();
        await $('#qty').setValue(quantity);

    }

    async addingCart() {
        await $('#product-addtocart-button').click();
    }
    
    // show cart
    async checkout() {
        // await $("div[data-bind='html: $parent.prepareMessageForHtml(message.text)']").waitForDisplayed({ timeout: 10000 });
        await this.shoppingCart.waitForClickable({ timeout: 10000 });
        await this.shoppingCart.click();
        await $('#top-cart-btn-checkout').click();
    }

    // shipping method
    async shipingMethod() {
        const display = await $("//span[contains(text(),'$0.00')]");
        await display.waitForDisplayed({ timeout: 50000 });
       await display.is
        // await $("//span[contains(text(),'$0.00')]").waitForDisplayed({ timeout: 10000 });
        await $("//span[contains(text(),'$0.00')]").click();
        await $("//span[contains(text(),'Next')]").click();
        // const price = await $$('.cart-price span');
        //for (let i = 0; i < price.length; i++) {
        //  await console.log("price:---- " + price[i].getText());
        // };
        await $("//span[contains(text(),'Place Order')]").click();
    }

    async successMsg(message) {
        await browser.pause(3000);
        await $('.base').waitForDisplayed({ timeout: 10000 });
        const msg = await $('.base').getText();
        expectChai(msg).to.include((message));
    }
    // verify order
    async orderPage() {
        await $('.order-number').click();
    }

    async verifyOrder(product, qty) {
        const productName = await $("//strong[contains(text(),'Ajax Full-Zip Sweatshirt')]").getText();
        expectChai(productName).to.equal(product);
        const quantity = await $("//span[@class='content']").getText();
        expectChai(quantity).to.equal(qty);
    }





    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        super.open();
        browser.maximizeWindow();
    }
}

module.exports = new AddToCartPage();
