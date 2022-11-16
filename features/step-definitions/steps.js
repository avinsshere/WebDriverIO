import { Given, When, Then } from "@wdio/cucumber-framework";
const LoginPage = require('../pageobjects/login.page');
const CreateAccountPage = require('../pageobjects/createAccount.page');
const AddToCartPage = require('../pageobjects/addToCart.page');

//Create an account

Given(/^User is on the login page$/, async () => {
    await LoginPage.open()
});

When(/^User click on create an account$/, async () => {
    await LoginPage.create()
});

When(/^User provide user details$/, async () => {   
    await CreateAccountPage.createUser()
});

Then(/^Verify user is on my account page$/, async () => {
    await CreateAccountPage.verifyMyAccount()
});

Then('User Update address in my account page', async () => {   
    await CreateAccountPage.updateAddress()
    await CreateAccountPage.logout()
});

//login to account

Then(/^Verify user is on home page$/, async () => {
    await LoginPage.msg()
});

When('User provide {string} and {string}', async (email, password) => {
    console.log("email:--------- " + email)
    console.log("password:------ " + password)
    await LoginPage.login(email, password)
});

Then(/^User log out from application$/, async ()=> {
    await CreateAccountPage.logout();
  });

  Then(/^Verify User can see alert \"([^\"]*)\"$/, async(message) =>{
    await LoginPage.alertMessage(message)
  });

  // add to cart

// When(/^User search product from category$/, async () => {
//     await AddToCartPage.searchProduct()
// });

Given(/^User navigate to the product page$/, async ()=>{
    await AddToCartPage.navigateToProductPage()
  });

  When(/^User search the \"([^\"]*)\"$/, async (product) =>{
    await AddToCartPage.searchProduct(product)
  });

  When(/^User provide \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$/, async (size, colour, quantity)=> {
    await AddToCartPage.addToCart(size, colour, quantity)
  });

  Then(/^By clicking on add to cart button product is added$/, async () =>{
    await AddToCartPage.addingCart()
  });

//Proceed to checkout and confirm the order
  Given(/^User is on checkout page$/, async ()=> {
    await AddToCartPage.checkout()
  });

  When(/^User select shipping method and place order$/, async ()=> {
    await AddToCartPage.shipingMethod()
  });

  Then(/^User get success \"([^\"]*)\"$/, async (message )=> {
    await AddToCartPage.successMsg(message)
  });

  //Validate the order
  Given(/^Navigate to Order confirmation page$/, async () => {
    await AddToCartPage.orderPage()
  });

  Then(/^Verify the \"([^\"]*)\" and \"([^\"]*)\"$/, async (product, qty )=> {
    await AddToCartPage.verifyOrder(product, qty)
  });