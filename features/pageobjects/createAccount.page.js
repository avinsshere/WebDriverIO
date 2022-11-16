const { Browser } = require('../../node_modules/puppeteer-core/lib/cjs/puppeteer/common/Browser');
const { faker } = require('@faker-js/faker');
const Page = require('./page');
const expectChai = require('chai').expect
/**
 * sub page containing specific selectors and methods for a specific page
 */
class CreateAccountPage extends Page {
    /**
     * define selectors using getter methods
     */
    get firstName () {
        return $('#firstname');
    }

    get lastName () {
        return $('#lastname');
    }

    get email() {
        return $('#email_address');
    }

    get password() {
        return $('#password');
    }

    get passwordConfirmation() {
        return $('#password-confirmation');
    }
    

    get btnSubmit () {
        return $('.submit');
    }

    get myAccount() {
        return $('.base');
    }
    
    get change() {
        return $('.switch');
    }
    
 
    get signOut() {
        return $('a=Sign Out');
    }

    get home() {
        return $('.logo')
    }

    get address() {
        return $("//span[contains(text(),'Manage Addresses')]")
    }

    get telephone() {
        return $('#telephone')
    }

    get street1() {
        return $('#street_1')
    }

    get city() {
        return $('#city')
    }

    get region() {
        return $('#region_id')
    }

    get zip() {
        return $('#zip')
    }

    get saveAddress() {
        return $("//span[contains(text(),'Save Address')]")
    }
   
    /**
     * a method to encapsule automation code to interact with the page
     * 
     */
    
    //create a new user data is genrated using faker class
    async createUser() {
        await this.firstName.setValue(faker.name.firstName());
        await this.lastName.setValue(faker.name.lastName());
        await this.email.setValue("avi" + faker.random.numeric(3)+"@gmail.com");
        await this.password.setValue("Password@123");
        await this.passwordConfirmation.setValue("Password@123");
        await this.btnSubmit.click();
    }

    //Verify the user is on my account page
    async verifyMyAccount() {
        const account = await this.myAccount.getText();
        console.log("verify :-- " + account);
        expectChai(account).to.equal('My Account');
    }

    // User Update Address
    async updateAddress() {
        await this.address.click();
        await this.telephone.setValue("9999999999");
        await this.street1.setValue(faker.address.street());
        await this.city.setValue(faker.address.city());
        const dropdown=await this.region;
        await dropdown.selectByAttribute('value', '2');
        await this.zip.setValue(faker.address.zipCode());
        await this.saveAddress.click();
    }

    // logout from Application
    async logout() {
        await this.change.click();
        await this.signOut.click();
        console.log("title:  " + browser.getTitle())
        await this.home.click()
    }
   
    /**
     * overwrite specific options to adapt it to page object
     */
     open () {
        browser.maximizeWindow();
        return super.open();
    }
}

module.exports = new CreateAccountPage();
