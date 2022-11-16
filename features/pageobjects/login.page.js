
import Page from "./page";
const expectChai = require('chai').expect
import CreateAccountPage from "../pageobjects/createAccount.page";
import { expect } from "chai";


/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername() {
        return $('#username');
    }

    get inputPassword() {
        return $('#password');
    }

    get btnSubmit() {
        return $('button[type="submit"]');
    }

    get clickOnCreateAccount() {
        return $('=Create an Account');
    }

    get home() {
        return $('.logo')
    }

    get signIn() {
        return $('a=Sign In')
    }

    get pass() {
        return $('#pass')
    }

    get emailAddress() {
        return $('#email')
    }

    get welcomeName() {
        return $("//div[@class='box-content']/p[contains(text(),'Avi')]")
    }

    get myAccount() {
        return $('a=My Account')
    }

    get logIn() {
        return $('#send2')
    }

    get alert(){
        return $("//div[@role='alert']/div/div")
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
 
    //click on create an account
    async create() {
        await this.clickOnCreateAccount.click();
        //  await console log(browser.getTitle());
    }

    async homePage() {
        await this.home.click();
        const title = await browser.getTitle();
        await console.log(title);
        await expect(browser).toHaveTitleContaining('Home Page');
    }


    async login(email, password) {
        await this.signIn.click();
        // await expect(browser).toHaveTitleContaining('Customer Login')
        await this.emailAddress.setValue(email);
        await this.pass.setValue(password);
        await this.logIn.click();

    }
    /*
    async login() {
        await this.signIn.click();
      // await expect(browser).toHaveTitleContaining('Customer Login')
        await this.emailAddress.setValue("shereavi26@gmail.com");
        await this.pass.setValue("Password@123");
        await this.logIn.click();

    }*/

    async msg() {
        await browser.pause(3000);
        await CreateAccountPage.change.click();
        await browser.pause(3000);
        await this.myAccount.click();
        const greet = await this.welcomeName.getText();
        console.log("msg:--------- " + greet);
        expectChai(greet).to.include('Avinash Shere');
    }
    
    async alertMessage(message){
        await this.alert.waitForDisplayed();
        const actualAlert=await this.alert.getText();
        console.log("alert message:----------"+actualAlert)
        await expect(actualAlert).to.include(message);
    }
    /**
     * overwrite specific options to adapt it to page object
     */
   
    open () {
        super.open();
        browser.maximizeWindow();
    }
}

module.exports = new LoginPage();
